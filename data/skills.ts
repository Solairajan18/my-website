/**
 * Skills data organized by category
 */

export interface Skill {
  name: string
  level: 'Expert' | 'Proficient' | 'Intermediate' | 'Familiar'
  proficiency: number // 0-100
  description?: string
  tags?: string[]
}

export interface SkillCategory {
  category: string
  description?: string
  skills: Skill[]
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    description: 'Cloud infrastructure and services',
    skills: [
      {
        name: 'AWS (Amazon Web Services)',
        level: 'Expert',
        proficiency: 95,
        description: 'API Gateway, Lambda, DynamoDB, VPC, EC2, RDS, Route 53, CloudWatch, IAM, S3, and more',
        tags: ['serverless', 'infrastructure', 'database', 'networking'],
      },
      {
        name: 'Microsoft Azure',
        level: 'Intermediate',
        proficiency: 60,
        description: 'Azure fundamentals, services, and cloud concepts',
        tags: ['cloud', 'infrastructure'],
      },
    ],
  },
  {
    category: 'Infrastructure as Code',
    description: 'Automation and infrastructure management',
    skills: [
      {
        name: 'Terraform',
        level: 'Expert',
        proficiency: 95,
        description: 'Modular Terraform code, reusable modules, state management with Scalr, infrastructure automation',
        tags: ['iac', 'automation', 'deployment'],
      },
      {
        name: 'GitLab CI/CD',
        level: 'Proficient',
        proficiency: 85,
        description: 'Pipeline configuration, automation, Terratest, security scanning (Sync Scan, LabLooter), deployment',
        tags: ['cicd', 'automation', 'devops'],
      },
    ],
  },
  {
    category: 'Programming Languages',
    description: 'Software development and scripting',
    skills: [
      {
        name: 'Python',
        level: 'Expert',
        proficiency: 90,
        description: 'AWS Lambda functions, API development, Pytest, unit testing, automation scripts',
        tags: ['backend', 'automation', 'testing'],
      },
      {
        name: 'Shell/Bash',
        level: 'Proficient',
        proficiency: 80,
        description: 'Linux scripting and automation',
        tags: ['automation', 'scripting'],
      },
    ],
  },
  {
    category: 'Testing & Quality Assurance',
    description: 'Code quality and testing practices',
    skills: [
      {
        name: 'Pytest',
        level: 'Proficient',
        proficiency: 85,
        description: 'Unit testing, test automation, CI/CD integration',
        tags: ['testing', 'quality', 'python'],
      },
      {
        name: 'BDD (Behavior Driven Development)',
        level: 'Intermediate',
        proficiency: 70,
        description: 'Test-driven development, acceptance testing',
        tags: ['testing', 'methodology'],
      },
      {
        name: 'Terratest',
        level: 'Proficient',
        proficiency: 80,
        description: 'Infrastructure code testing, automated validation',
        tags: ['testing', 'iac', 'terraform'],
      },
    ],
  },
  {
    category: 'Operating Systems',
    description: 'System administration and management',
    skills: [
      {
        name: 'Linux',
        level: 'Expert',
        proficiency: 90,
        description: 'Administration, command-line tools, system configuration',
        tags: ['infrastructure', 'devops'],
      },
      {
        name: 'Windows Server',
        level: 'Proficient',
        proficiency: 75,
        description: 'Server administration, configuration, management',
        tags: ['infrastructure', 'devops'],
      },
    ],
  },
  {
    category: 'Tools & Technologies',
    description: 'Development and deployment tools',
    skills: [
      {
        name: 'Git & Version Control',
        level: 'Expert',
        proficiency: 90,
        tags: ['devops', 'collaboration'],
      },
      {
        name: 'Docker',
        level: 'Intermediate',
        proficiency: 65,
        tags: ['containerization', 'devops'],
      },
      {
        name: 'Kubernetes',
        level: 'Intermediate',
        proficiency: 65,
        tags: ['orchestration', 'devops'],
      },
    ],
  },
  {
    category: 'Databases',
    description: 'Database management and design',
    skills: [
      {
        name: 'DynamoDB',
        level: 'Expert',
        proficiency: 90,
        description: 'NoSQL database design, optimization, global tables, migration',
        tags: ['database', 'aws', 'nosql'],
      },
      {
        name: 'SQL Server',
        level: 'Proficient',
        proficiency: 80,
        description: 'Relational database management, migration',
        tags: ['database', 'sql'],
      },
      {
        name: 'DB2',
        level: 'Proficient',
        proficiency: 75,
        description: 'Mainframe database systems, migration',
        tags: ['database', 'legacy'],
      },
    ],
  },
]

/**
 * All skills as a flat list for easy search and filtering
 */
export const FLAT_SKILLS: Skill[] = SKILLS_DATA.reduce<Skill[]>(
  (acc, category) => [...acc, ...category.skills],
  []
)

/**
 * Get skills by category
 */
export const getSkillsByCategory = (category: string): Skill[] => {
  const found = SKILLS_DATA.find((cat) => cat.category.toLowerCase() === category.toLowerCase())
  return found ? found.skills : []
}

/**
 * Get all skill names
 */
export const getAllSkillNames = (): string[] => {
  return FLAT_SKILLS.map((skill) => skill.name)
}

/**
 * Get skill by name
 */
export const getSkillByName = (name: string): Skill | undefined => {
  return FLAT_SKILLS.find((skill) => skill.name.toLowerCase() === name.toLowerCase())
}
