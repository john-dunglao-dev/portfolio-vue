

export enum FrontendSkill {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  Vue = 'Vue.js',
  React = 'React',
  TailwindCSS = 'Tailwind CSS',
  Bootstrap = 'Bootstrap',
  SASS = 'SASS',
  Rollup = 'Rollup',
  Vite = 'Vite',
  Webpack = 'Webpack',
}

export enum BackendSkill {
  NodeJS = 'Node.js',
  Express = 'Express.js',
  MongoDB = 'MongoDB',
  Redis = 'Redis',
  Laravel = 'Laravel',
  PHP = 'PHP',
  Python = 'Python',
  Django = 'Django',
  Flask = 'Flask',
  Java = 'Java',
  Springboot = 'Spring Boot',
}

export enum DevOpsSkill {
  Git = 'Git',
  Docker = 'Docker',
  GCP = 'Google Cloud Platform',
  DigitalOcean = 'DigitalOcean',
}

export enum DatabaseSkill {
  MongoDB = 'MongoDB',
  MySQL = 'MySQL',
  PostgreSQL = 'PostgreSQL',
  Elasticsearch = 'Elasticsearch',
  Redis = 'Redis',
}

export enum PracticedSkill {
  Microservices = 'Microservices',
  RESTfulAPI = 'RESTful API',
  GraphQL = 'GraphQL',
  TDD = 'Test-Driven Development (TDD)',
  CI_CD = 'Continuous Integration/Continuous Deployment (CI/CD)',
  Agile = 'Agile Methodologies',
  Scrum = 'Scrum',
  Kanban = 'Kanban',
  PairProgramming = 'Pair Programming',
  CodeReview = 'Code Review',
  Documentation = 'Documentation',
  PerformanceOptimization = 'Performance Optimization',
  SecurityBestPractices = 'Security Best Practices',
  Containerization = 'Containerization',
}

export type AllSkill = 
  | FrontendSkill 
  | BackendSkill 
  | DevOpsSkill 
  | DatabaseSkill 
  | PracticedSkill;
export const AllSkill = {
  ...FrontendSkill,
  ...BackendSkill,
  ...DevOpsSkill,
  ...DatabaseSkill,
  ...PracticedSkill,
}

