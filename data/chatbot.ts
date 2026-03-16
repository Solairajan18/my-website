/**
 * Chatbot responses organized by topic
 * Extracted from legacy portfolio api.py
 */

export const CHATBOT_RESPONSES = {
  // GREETINGS
  greetings: {
    hi: [
      'Hey there! Welcome to my portfolio. How can I assist you?',
      'Hello! Feel free to ask me about my experience, skills, or projects.',
      "Hi! I'm Solai, an AWS Cloud Engineer. Ask me anything about my work!",
      "Welcome! Need details about my experience, skills, or projects? Just ask!",
    ],
    hello: [
      "Hello! I'm Solai, an AWS Cloud Engineer. How can I help you today?",
      'Hi there! Feel free to explore my portfolio and ask me anything.',
      'Hey! Want to know about my AWS projects or Terraform expertise?',
      "Welcome! Ask about my experience, projects, or skills!",
    ],
    bye: [
      'Goodbye! Thanks for visiting my portfolio.',
      'See you soon! Feel free to reach out anytime.',
      'It was nice chatting with you. Have a great day!',
    ],
    thanks: [
      "You're welcome! Let me know if you have any other questions.",
      'Glad to help! Feel free to explore my portfolio for more details.',
    ],
  },

  // PERSONAL DETAILS
  personal: {
    identity: [
      "I'm Solai, an AWS Cloud Engineer with expertise in Terraform, Python, and cloud automation.",
      'I\'m Solai Rajan, a cloud engineer specializing in AWS, GitLab CI/CD, and infrastructure as code.',
    ],
    name: [
      'I\'m Solai Rajan, This is My chat bot Sol.AI you can ask my skills, experience, education, projects, resume',
      'I\'m Solai Rajan, a cloud engineer specializing in AWS, GitLab CI/CD, and infrastructure as code.',
    ],
    experience: [
      'I have over five years of experience in the IT industry, focusing on cloud engineering and automation with AWS, Terraform, Python, Pytest, BDD testing, and GitLab CI/CD.',
    ],
    education: [
      'I am a BSc graduate with a strong foundation in cloud computing, DevOps, and software development.',
    ],
    certifications: [
      'I\'m certified AWS Solution Architect Associate and Microsoft Certified Azure Fundamentals.',
    ],
  },

  // TECHNICAL SKILLS
  skills: {
    general: [
      'My key skills include AWS, Terraform, Python, GitLab CI/CD, BDD, Pytest, and cloud automation.',
    ],
    aws: [
      'I have experience in AWS services like API Gateway, Lambda, DynamoDB, VPC, and more.',
    ],
    terraform: [
      'I use Terraform for infrastructure as code, automating AWS deployments with reusable modules.',
    ],
    python: [
      'I develop serverless applications and automation scripts using Python.',
      'I use Python for AWS Lambda functions, API development, and testing with Pytest.',
      'I implemented structured, modular Python code for API development and AWS automation.',
    ],
    gitlab: [
      'I have experience setting up GitLab CI/CD pipelines for automated Terraform deployments.',
      'I integrated security scans like Sync Scan and LabLooter into GitLab pipelines.',
      'I use GitLab runners to automate infrastructure provisioning and API deployments.',
    ],
    github: [
      'Find my GitHub projects at: https://github.com/Solairajan18',
    ],
    tech: [
      'Favorite tech stack: AWS, Terraform, Python, GitLab CI/CD, and cloud automation.',
    ],
    devops: [
      'I follow DevOps best practices, automating CI/CD pipelines for cloud deployments.',
      'I have hands-on experience in infrastructure automation and cloud security.',
    ],
    security: [
      'I implement security best practices like IAM policies, VPC security groups, and encryption.',
      'Cloud security is critical! I use AWS security tools and Terraform to enforce compliance.',
    ],
  },

  // PROJECTS
  projects: [
    "I worked on mainframe-to-AWS modernization, DB2 to DynamoDB migration, and developed high-availability APIs. You can also check out my projects on my portfolio website.",
  ],

  // CONTACT & RESUME
  contact: [
    'You can reach me via my website, LinkedIn, email at solai13kamaraj@gmail.com, and GitHub.',
  ],
  resume: [
    'You can find my resume on my website (click Download CV).',
  ],

  // FUN TOPICS
  hobbies: {
    clash: [
      'I play Clash of Clans and I\'m currently at Town Hall 15. My favorite attack strategy is the Hybrid Army (Hog Riders + Miners). I often battle against TH16 opponents and adjust my strategy accordingly!',
    ],
    general: [
      'I enjoy gaming, learning new cloud technologies, and optimizing infrastructure deployments.',
      "Apart from tech, I like playing Clash of Clans and improving my attack strategies!",
    ],
  },
}

// Fuzzy matching keywords for chatbot
export const CHATBOT_KEYWORDS = {
  identityPhrases: [
    'who are you',
    'what is your name',
    'your name',
    'are you a bot',
    'what are you',
  ],
  skillPhrases: [
    'what is your skill',
    'your primary skill',
    'your main skill',
    'what skills do you have',
    'tell me about your skills',
  ],
  experiencePhrases: [
    'how many years',
    'years of experience',
    'total experience',
    "what's your experience",
    'how much experience',
    'your work experience',
    'tell me your experience',
  ],
  experienceKeywords: [
    'know',
    'experience',
    'familiar with',
    'worked with',
    'used',
    'do you use',
    'have you used',
  ],
}

/**
 * Flatten all keyword responses into a single map for easy lookup
 */
export const getKeywordResponsesMap = (): Record<string, string[]> => {
  const map: Record<string, string[]> = {}

  // Add greetings
  Object.entries(CHATBOT_RESPONSES.greetings).forEach(([key, responses]) => {
    map[key] = responses
  })

  // Add personal details
  Object.entries(CHATBOT_RESPONSES.personal).forEach(([key, responses]) => {
    map[key] = responses
  })

  // Add skills
  Object.entries(CHATBOT_RESPONSES.skills).forEach(([key, responses]) => {
    map[key] = responses
  })

  // Add projects
  map['projects'] = CHATBOT_RESPONSES.projects

  // Add contact
  map['contact'] = CHATBOT_RESPONSES.contact
  map['resume'] = CHATBOT_RESPONSES.resume

  // Add hobbies
  Object.entries(CHATBOT_RESPONSES.hobbies).forEach(([key, responses]) => {
    map[`clash_of_clans`] = responses.clash || responses.general
    map['hobbies'] = responses.general
  })

  return map
}

/**
 * Default fallback responses when no keyword matches
 */
export const DEFAULT_RESPONSES = [
  "I'm not sure how to respond to that. Try asking about my skills, projects, or experience!",
  'Can you clarify your question? You can ask about AWS, Terraform, or Python.',
  "That's interesting! You can ask me about my cloud expertise or GitLab experience.",
  "I'm SolAI! I love chatting about tech, hobbies, or anything on your mind. 😊",
  "SolAI here! If you want to talk about my portfolio, skills, or just have a casual chat, I'm all ears!",
  "Not sure I got that, but SolAI is always happy to chat! Ask me anything, professional or fun.",
  'SolAI can help with portfolio questions or just keep you company. What\'s up?',
]

/**
 * System prompts for the chatbot
 */
export const CHATBOT_SYSTEM_PROMPT = `You are SolAI, a super friendly AI chatbot created by Solai Rajan. 
Answer questions about Solai Rajan's portfolio, skills, experience, or have a casual, friendly conversation. 
Always respond in Markdown format, and keep the tone warm, helpful, and approachable. 
Only introduce yourself as SolAI, a chatbot created by Solai Rajan, if the user asks about your identity.`

export const CHATBOT_IDENTITY = {
  name: 'SolAI',
  creator: 'Solai Rajan',
  shortIntro:
    "Hi there! I'm SolAI, a friendly chatbot created by Solai Rajan to help you with portfolio questions, tech topics, or just to have a fun chat!",
}

/**
 * Chatbot configuration
 */
export const CHATBOT_CONFIG = {
  fuzzyMatchThreshold: 70, // 0-100, higher = stricter matching
  maxResponses: 1,
  enableLLMFallback: process.env.NEXT_PUBLIC_CHATBOT_LLM === 'true',
  llmModel: 'deepseek/deepseek-r1:free',
  llmApiUrl: process.env.NEXT_PUBLIC_LLM_API_URL || 'https://openrouter.ai/api/v1/chat/completions',
}
