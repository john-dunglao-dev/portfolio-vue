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

export const frontendIcons: Record<FrontendSkill, string> = {
  [FrontendSkill.HTML]: 'devicon-html5-plain',
  [FrontendSkill.CSS]: 'devicon-css3-plain',
  [FrontendSkill.JavaScript]: 'devicon-javascript-plain',
  [FrontendSkill.TypeScript]: 'devicon-typescript-plain',
  [FrontendSkill.Vue]: 'devicon-vuejs-plain',
  [FrontendSkill.React]: 'devicon-react-original',
  [FrontendSkill.TailwindCSS]: 'devicon-tailwindcss-plain',
  [FrontendSkill.Bootstrap]: 'devicon-bootstrap-plain',
  [FrontendSkill.SASS]: 'devicon-sass-original',
  [FrontendSkill.Rollup]: 'devicon-rollup-plain',
  [FrontendSkill.Vite]: 'devicon-vitejs-plain',
  [FrontendSkill.Webpack]: 'devicon-webpack-plain',
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

export const backendIcons: Record<BackendSkill, string> = {
  [BackendSkill.NodeJS]: 'devicon-nodejs-plain',
  [BackendSkill.Express]: 'devicon-express-original',
  [BackendSkill.MongoDB]: 'devicon-mongodb-plain',
  [BackendSkill.Redis]: 'devicon-redis-plain',
  [BackendSkill.Laravel]: 'devicon-laravel-plain',
  [BackendSkill.PHP]: 'devicon-php-plain',
  [BackendSkill.Python]: 'devicon-python-plain',
  [BackendSkill.Django]: 'devicon-django-plain',
  [BackendSkill.Flask]: 'devicon-flask-original',
  [BackendSkill.Java]: 'devicon-java-plain',
  [BackendSkill.Springboot]: 'devicon-spring-plain',
}

export enum DevOpsSkill {
  Git = 'Git',
  Docker = 'Docker',
  GCP = 'Google Cloud Platform',
  DigitalOcean = 'DigitalOcean',
}

export const devopsIcons: Record<DevOpsSkill, string> = {
  [DevOpsSkill.Git]: 'devicon-git-plain',
  [DevOpsSkill.Docker]: 'devicon-docker-plain',
  [DevOpsSkill.GCP]: 'devicon-googlecloud-plain',
  [DevOpsSkill.DigitalOcean]: 'devicon-digitalocean-plain',
}

export enum DatabaseSkill {
  MongoDB = 'MongoDB',
  MySQL = 'MySQL',
  PostgreSQL = 'PostgreSQL',
  Elasticsearch = 'Elasticsearch',
  Redis = 'Redis',
}

export const databaseIcons: Record<DatabaseSkill, string> = {
  [DatabaseSkill.MongoDB]: 'devicon-mongodb-plain',
  [DatabaseSkill.MySQL]: 'devicon-mysql-plain',
  [DatabaseSkill.PostgreSQL]: 'devicon-postgresql-plain',
  [DatabaseSkill.Elasticsearch]: 'devicon-elasticsearch-plain',
  [DatabaseSkill.Redis]: 'devicon-redis-plain',
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

export type AllSkill = FrontendSkill | BackendSkill | DevOpsSkill | DatabaseSkill | PracticedSkill
export const AllSkill = {
  ...FrontendSkill,
  ...BackendSkill,
  ...DevOpsSkill,
  ...DatabaseSkill,
  ...PracticedSkill,
}
