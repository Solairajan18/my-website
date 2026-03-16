/**
 * Portfolio configuration and personal information
 * Centralized data source for all portfolio content
 */

export const PORTFOLIO_CONFIG = {
  // Personal Information
  name: 'Solai Rajan',
  title: 'Cloud Engineer',
  birthday: 'August 13, 1998',
  degree: 'BSc Computer Science',
  experience: '5+ Years',
  phone: '7299519004',
  email: 'solai13kamaraj@gmail.com',
  location: 'Chennai, India',
  website: 'https://solairajan.online',
  
  // Quote/Motto
  motto: 'I measure my success by the knowledge I share, not the knowledge I keep.',
  
  // Social Links
  social: {
    facebook: 'https://www.facebook.com/solai.abde',
    linkedin: 'https://www.linkedin.com/in/solai-rajan-94479816b',
    instagram: 'https://www.instagram.com/solai.kamaraj',
    whatsapp: 'https://wa.me/7299519004',
    linktree: 'https://linktr.ee/solairajan',
    github: 'https://github.com/Solairajan18',
  },
  
  // Resume
  resumeUrl: '/solai_rajan_resume.pdf',
  
  // Color Scheme (from old portfolio)
  colors: {
    primary: '#00B87B',    // Green
    secondary: '#314355',  // Dark blue-gray
    light: '#F2F2F2',      // Light gray
    dark: '#2C3E50',       // Dark
  },
  
  // Google Forms Integration
  googleForms: {
    feedbackUrl: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScuChiAISSfQ2Lq_f-utJ8dvJGUjVj5SX7es3pkPkHjWnQLhw/formResponse',
    feedbackField: 'entry.1496290439',
  },
  
  // API Configuration
  api: {
    chatbotUrl: process.env.NEXT_PUBLIC_CHATBOT_API || 'https://api.solairajan.online',
  },
}

// About Me
export const ABOUT = {
  summary: `Motivated and detail-oriented Cloud Engineer with a strong focus on Amazon Web Services (AWS), proficient in designing, implementing, and managing cloud solutions on the AWS platform. Committed to staying up to date with the latest AWS trends, continuously expanding knowledge to deliver high-quality solutions. A collaborative team player with excellent problem-solving skills and a drive for innovation, ready to leverage AWS expertise to contribute to the success of organizations seeking cloud-based solutions.`,
  
  details: [
    { label: 'Name', value: 'Solai Rajan' },
    { label: 'Birthday', value: '13 August 1998' },
    { label: 'Degree', value: 'BSc Computer Science' },
    { label: 'Experience', value: '5 Years' },
    { label: 'Phone', value: '7299519004' },
    { label: 'Email', value: 'solai13kamaraj@gmail.com' },
    { label: 'Location', value: 'Chennai, India' },
  ],
  
  certifications: [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      url: 'https://www.credly.com/badges/0f8942c9-7fc0-4ece-8ca4-4f158a86ff04',
      image: '/img/aws-architect.png',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      url: 'https://learn.microsoft.com/api/credentials/share/en-gb/SolaiRajan-3120/20E20661D6A24ACE?sharingId=9B779F8124134FC7',
      image: '/img/Az-900.png',
    },
  ],
}

// Experience
export const EXPERIENCE = [
  {
    id: 1,
    title: 'Cloud Engineer',
    company: 'HTC Global Services',
    duration: 'February 2022 - Till Now',
    period: '2+ years',
    projects: [
      {
        name: 'Mainframe to AWS Modernization',
        client: 'State Farm',
        clientUrl: 'https://www.statefarm.com/',
        achievements: [
          'Developed a high-availability API on AWS as part of a modernization project transitioning from mainframe to AWS, utilizing API Gateway (private endpoint) to integrate a private Lambda and DynamoDB for backend operations.',
          'Implemented disaster recovery (DR) across two regions, deploying API Gateway, Lambda functions, and load balancers in each region and using DynamoDB Global Tables for cross-region data replication.',
          'Configured Route 53 failover routing with a multi-region load balancer setup and health checks for seamless traffic redirection to healthy endpoints in the event of failure.',
          'Automated API health monitoring with EventBridge-triggered Lambda functions, which conducted health checks via DynamoDB scans and activated CloudWatch alarms based on API responses.',
          'Streamlined DR failover process by integrating Route 53 health checks with CloudWatch alarms, ensuring minimal downtime and consistent API availability for end-users.',
          'Created AWS resources using reusable Terraform modules designed for modular consumption, incorporating custom templates for specific services, all stored in GitLab to ensure accessibility across projects.',
          'Leveraged a GitLab CI/CD pipeline integrated with Scalr for Terraform state management, utilized Terratest for automated infrastructure code validation, and implemented security compliance checks using Sync Scan and LabLooter, alongside a Pytest stage for unit testing Python code deployed in AWS Lambda functions.',
        ],
      },
      {
        name: 'Data Migration of DB2 to DynamoDB',
        achievements: [
          'Executed end-to-end data migration from DB2 to DynamoDB, leveraging AWS Transfer Service, S3, Glue, and VPC Endpoint for secure operations.',
          'Configured AWS Transfer Service with VPC Endpoint to enable private, efficient data transfers to S3.',
          'Performed ETL with AWS Glue to transform and prepare DB2 data for seamless integration with DynamoDB.',
          'Enhanced data security and integrity throughout the migration, ensuring compliance with best practices.',
          'Optimized DynamoDB setup post-migration, enabling fast, reliable data access for application needs.',
          'Deployed all AWS resources using modular Terraform code, creating reusable modules and templates stored in GitLab for easy cross-project use.',
          'Integrated continuous security checks with Sync Scan and LabLooter in the pipeline stages, and added a Pytest stage to validate the Python code used in AWS Glue.',
        ],
      },
      {
        name: 'API Lambda Development Project',
        achievements: [
          'Developed Python code for AWS Lambda functions to support API operations, structuring code into modular files to streamline execution.',
          'Implemented robust input validation and comprehensive exception handling, adhering to best practices and standardized naming conventions.',
          'Optimized Lambda performance by minimizing execution time and memory usage, ensuring efficient resource utilization.',
          'Designed and implemented unit tests with Pytest to validate code functionality, improving reliability and enabling continuous integration.',
          'Created High-Level Design (HLD), Low-Level Design (LLD), and component specification documents.',
        ],
      },
      {
        name: 'Atos Cloud to AWS Migration',
        client: 'Philips DA',
        clientUrl: 'https://www.domesticappliances.philips.co.in/',
        achievements: [
          'Collaborated on migrating a .NET application and SQL Server database from Atos Cloud to AWS.',
          'Analyzed infrastructure and defined migration requirements with the team.',
          'Configured AWS services, including EC2 for application hosting and RDS for SQL Server.',
          'Installed necessary software and dependencies, ensuring compatibility.',
          'Supported testing to validate functionality and performance post-migration.',
          'Delivered solutions tailored to stakeholder needs, addressing migration challenges.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Network Infrastructure Design',
    company: 'Accenture',
    duration: 'March 2020 - October 2021',
    period: '1+ year',
    projects: [
      {
        name: 'Network Infrastructure Design',
        client: 'TDC',
        clientUrl: 'https://tdcgroup.com/',
        achievements: [
          'Utilized the INCA tool to strategically design fiber cable placements across Denmark.',
          'Developed accurate network maps by referencing legacy copper cable layouts, transitioning the design from copper to modern fiber infrastructure.',
          'Ensured optimized internet infrastructure to support advanced connectivity needs by leveraging geographic data and existing network schematics.',
        ],
      },
    ],
  },
]

// Education
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor Degree',
    institution: 'K.C.S Kasi Nadar College Of Arts & Science',
    field: 'B.Sc Computer Science',
    duration: '2016 - 2019',
    percentage: '56%',
    location: 'Chennai - 21',
  },
  {
    id: 2,
    degree: 'High School',
    institution: 'Sagaya Matha Matriculation Hr Sec School',
    field: 'HSC',
    duration: '2015 - 2016',
    percentage: '55%',
    location: 'Chennai - 57',
  },
  {
    id: 3,
    degree: 'School',
    institution: 'Sagaya Matha Matriculation Hr Sec School',
    field: 'SSLC',
    duration: '2013 - 2014',
    percentage: '69%',
    location: 'Chennai - 57',
  },
]
