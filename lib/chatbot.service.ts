/**
 * Chatbot service with fuzzy matching logic
 * Reimplementation of the FastAPI chatbot logic in TypeScript
 */

import { CHATBOT_RESPONSES, CHATBOT_KEYWORDS, DEFAULT_RESPONSES, CHATBOT_CONFIG, CHATBOT_IDENTITY, getKeywordResponsesMap } from '@/data/chatbot'

/**
 * Simple string similarity matching (Levenshtein distance based)
 * Similar to fuzz.partial_ratio from thefuzz library
 * Returns a score from 0-100
 */
export function calculateStringSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().trim()
  const s2 = str2.toLowerCase().trim()

  // Check if s2 is contained in s1 (partial match)
  if (s1.includes(s2) || s2.includes(s1)) {
    return 100
  }

  // Calculate Levenshtein distance variant for fuzzy matching
  const longer = s1.length > s2.length ? s1 : s2
  const shorter = s1.length > s2.length ? s2 : s1

  if (longer.length === 0) return 100.0

  const editDistance = getEditDistance(longer, shorter)
  return ((longer.length - editDistance) / longer.length) * 100
}

/**
 * Calculate Levenshtein distance between two strings
 */
function getEditDistance(s1: string, s2: string): number {
  const costs = []
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j
      } else if (j > 0) {
        let newValue = costs[j - 1]
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1
        }
        costs[j - 1] = lastValue
        lastValue = newValue
      }
    }
    if (i > 0) costs[s2.length] = lastValue
  }
  return costs[s2.length]
}

/**
 * Get a random item from an array
 */
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Check if message matches any identity phrases
 */
export function checkIdentity(message: string): string | null {
  const threshold = CHATBOT_CONFIG.fuzzyMatchThreshold
  for (const phrase of CHATBOT_KEYWORDS.identityPhrases) {
    if (calculateStringSimilarity(phrase, message) >= threshold) {
      return CHATBOT_IDENTITY.shortIntro
    }
  }
  return null
}

/**
 * Check if message is asking about skills
 */
export function checkSkills(message: string): string | null {
  const threshold = CHATBOT_CONFIG.fuzzyMatchThreshold
  for (const phrase of CHATBOT_KEYWORDS.skillPhrases) {
    if (calculateStringSimilarity(phrase, message) >= threshold) {
      return getRandomItem(CHATBOT_RESPONSES.skills.general)
    }
  }
  return null
}

/**
 * Check if message is asking about experience
 */
export function checkExperience(message: string): string | null {
  const threshold = CHATBOT_CONFIG.fuzzyMatchThreshold
  for (const phrase of CHATBOT_KEYWORDS.experiencePhrases) {
    if (calculateStringSimilarity(phrase, message) >= threshold) {
      return CHATBOT_RESPONSES.personal.experience[0]
    }
  }
  return null
}

/**
 * Check for unknown skills/technologies
 */
export function checkUnknownSkill(message: string): string | null {
  const keywordMap = getKeywordResponsesMap()
  const skillNames = Object.keys(keywordMap)

  for (const keyword of CHATBOT_KEYWORDS.experienceKeywords) {
    if (message.includes(keyword)) {
      const parts = message.split(keyword)
      if (parts.length > 1) {
        const afterKeyword = parts[1].trim()
        const potentialSkills = afterKeyword.split(/[\s.,?!]+/)

        for (const potentialSkill of potentialSkills) {
          const cleaned = potentialSkill.toLowerCase().trim()
          if (
            cleaned &&
            !skillNames.includes(cleaned) &&
            cleaned.length > 2
          ) {
            return `No, SolAI doesn't have experience in ${potentialSkill}, but always eager to learn new things!`
          }
        }
      }
    }
  }

  return null
}

/**
 * Main chatbot response function
 * Implements the fuzzy matching logic from FastAPI backend
 */
export async function getChatbotResponse(userMessage: string): Promise<string> {
  const message = userMessage.toLowerCase().trim()

  // Check for specific query types first
  let response: string | null = null

  // 1. Check identity
  response = checkIdentity(message)
  if (response) return response

  // 2. Check skills
  response = checkSkills(message)
  if (response) return response

  // 3. Check experience
  response = checkExperience(message)
  if (response) return response

  // 4. Check for unknown skills
  response = checkUnknownSkill(message)
  if (response) return response

  // 5. Fuzzy match against keywords
  const threshold = CHATBOT_CONFIG.fuzzyMatchThreshold
  const keywordMap = getKeywordResponsesMap()

  const matches: { keyword: string; score: number; response: string }[] = []

  for (const [keyword, responses] of Object.entries(keywordMap)) {
    const score = calculateStringSimilarity(keyword, message)
    if (score >= threshold) {
      matches.push({
        keyword,
        score,
        response: getRandomItem(responses),
      })
    }
  }

  // If we have matches, return the best one
  if (matches.length > 0) {
    const bestMatch = matches.sort((a, b) => b.score - a.score)[0]
    return bestMatch.response
  }

  // 6. Fallback to friendly default response
  return getRandomItem(DEFAULT_RESPONSES)
}

/**
 * Get chatbot response with optional LLM enhancement
 * If LLM is enabled, this will send the response to the LLM API for enhancement
 */
export async function getChatbotResponseWithLLM(
  userMessage: string,
  useLLM: boolean = CHATBOT_CONFIG.enableLLMFallback
): Promise<string> {
  // Get base response from keyword matching
  const baseResponse = await getChatbotResponse(userMessage)

  // If LLM is disabled, return base response
  if (!useLLM || !process.env.NEXT_PUBLIC_LLM_API_KEY) {
    return baseResponse
  }

  try {
    // Call LLM API to enhance the response
    // This is a client-side safety wrapper - actual LLM calls should be done server-side
    return baseResponse // For now, return base response; LLM enhancement should happen on backend
  } catch (error) {
    console.error('LLM enhancement failed, returning base response:', error)
    return baseResponse
  }
}

/**
 * Get all available keywords for the chatbot
 */
export function getAvailableKeywords(): string[] {
  return Object.keys(getKeywordResponsesMap())
}

/**
 * Check if a keyword is recognized by the chatbot
 */
export function isKeywordRecognized(keyword: string): boolean {
  return getAvailableKeywords().includes(keyword.toLowerCase())
}

/**
 * Get responses for a specific keyword
 */
export function getResponsesForKeyword(keyword: string): string[] {
  const keywordMap = getKeywordResponsesMap()
  return keywordMap[keyword.toLowerCase()] || DEFAULT_RESPONSES
}
