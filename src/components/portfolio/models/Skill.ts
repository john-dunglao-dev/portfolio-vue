export enum FrontendSkill {
  HTML = 'HTML',
  CSS = 'CSS',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  Vue = 'Vue',
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

export type SkillDisplay = {
  title: AllSkill
  description: string
  icon: string
}

export type SkillCategory = {
  label: string
  skills: SkillDisplay[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Frontend Skills',
    skills: [
      {
        title: FrontendSkill.HTML,
        description:
          'This is the first skill I picked up when I started to know more about web development. I thought it was easy to learn and understand the structure of a web page until it isn`t.',
        icon: frontendIcons[FrontendSkill.HTML],
      },
      {
        title: FrontendSkill.CSS,
        description:
          'I learned CSS alongside HTML. I found it interesting to style web pages and make them visually appealing. My first "This is fun" moment from when I started learning.',
        icon: frontendIcons[FrontendSkill.CSS],
      },
      {
        title: FrontendSkill.JavaScript,
        description:
          'JavaScript is the programming language that made web pages interactive. I learned it after HTML and CSS, and it opened up a whole new world of possibilities for me in web development.',
        icon: frontendIcons[FrontendSkill.JavaScript],
      },
      {
        title: FrontendSkill.TypeScript,
        description:
          'This paved the way for me to learn more advanced frontend frameworks and libraries. TypeScript is a superset of JavaScript that adds static typing, which helps catch errors early and improves code maintainability. I instantly fell in love with it because of its features.',
        icon: frontendIcons[FrontendSkill.TypeScript],
      },
      {
        title: FrontendSkill.Vue,
        description:
          'Vue is the first frontend framework I learned. I found it easy to pick up and understand its concepts. It has a gentle learning curve, which made it perfect for beginners like me that time.',
        icon: frontendIcons[FrontendSkill.Vue],
      },
    ],
  },
  {
    label: 'Backend Skills',
    skills: [],
  },
  {
    label: 'DevOps Skills',
    skills: [],
  },
  {
    label: 'Database Skills',
    skills: [],
  },
  {
    label: 'Practiced Skills',
    skills: [],
  },
]
