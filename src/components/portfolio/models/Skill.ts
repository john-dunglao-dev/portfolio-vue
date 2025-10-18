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
      {
        title: FrontendSkill.Bootstrap,
        description:
          'I learned Bootstrap after learning the basics of CSS. It is a popular CSS framework that provides pre-designed components and styles, making it easier to create responsive and visually appealing web pages quickly.',
        icon: frontendIcons[FrontendSkill.Bootstrap],
      },
      {
        title: FrontendSkill.TailwindCSS,
        description:
          'I learned Tailwind CSS after getting comfortable with CSS and Bootstrap. It is a utility-first CSS framework that allows for rapid UI development by providing a set of pre-defined classes. I like how it promotes a different approach to styling compared to traditional CSS frameworks.',
        icon: frontendIcons[FrontendSkill.TailwindCSS],
      },
      {
        title: FrontendSkill.Bootstrap,
        description:
          'I learned Bootstrap after learning the basics of CSS. It is a popular CSS framework that provides pre-designed components and styles, making it easier to create responsive and visually appealing web pages quickly.',
        icon: frontendIcons[FrontendSkill.Bootstrap],
      },
      {
        title: FrontendSkill.SASS,
        description:
          'I learned SASS when I worked with Vue.js projects that required more advanced styling capabilities. SASS is a CSS preprocessor that adds features like variables, nesting, and mixins, making it easier to write and maintain complex stylesheets.',
        icon: frontendIcons[FrontendSkill.SASS],
      },
      {
        title: FrontendSkill.Vite,
        description:
          'I started using Vite as my primary build tool for frontend projects due to its fast development server and optimized build process. Vite leverages native ES modules and provides a smooth development experience with features like hot module replacement (HMR). It is incredibly fast and efficient which is why I continued using it for my projects.',
        icon: frontendIcons[FrontendSkill.Vite],
      },
      {
        title: FrontendSkill.Webpack,
        description:
          'I learned Webpack when I wanted to have more control over the build process of my frontend projects specifically in Vue.js framework. Webpack is a powerful module bundler that allows for advanced configuration and optimization of assets. Although it has a steeper learning curve compared to Vite, I found it valuable for larger projects that require custom build setups.',
        icon: frontendIcons[FrontendSkill.Webpack],
      },
      {
        title: FrontendSkill.Rollup,
        description:
          'I explored Rollup as an alternative module bundler for specific frontend projects that required tree-shaking and optimized bundle sizes. Rollup is known for its efficient bundling of ES modules and is often used for libraries and smaller applications. I found it useful for projects where minimizing bundle size was a priority.',
        icon: frontendIcons[FrontendSkill.Rollup],
      },
    ],
  },
  {
    label: 'Backend Skills',
    skills: [
      {
        title: BackendSkill.NodeJS,
        description:
          'I learned Node.js as a start for real-time web applications and server-side development. It allows me to use JavaScript on the server, which was familiar territory for me after working with frontend development.',
        icon: backendIcons[BackendSkill.NodeJS],
      },
      {
        title: BackendSkill.PHP,
        description:
          'PHP is the first backend programming language I learned in the bootcamp I attended. I found it easy to pick up and understand its syntax. It has a gentle learning curve, which made it perfect for beginners like me that time.',
        icon: backendIcons[BackendSkill.PHP],
      },
      {
        title: BackendSkill.Python,
        description:
          'I learned Python for the first company I worked with. It is a versatile programming language that is widely used in web development, data analysis, artificial intelligence, and more. I appreciate its readability and simplicity, which makes it easy to write and maintain code. I also made a real-time binary data converter that came from a 3rd party using this language.',
        icon: backendIcons[BackendSkill.Python],
      },
      {
        title: BackendSkill.Express,
        description:
          'I learned Express.js as the first backend framework for Node.js for creating my first real-time game data API receptor. It provides a simple and flexible way to handle routing, middleware, and server-side logic. I found it easy to set up and get started with building backend applications quickly.',
        icon: backendIcons[BackendSkill.Express],
      },
      {
        title: BackendSkill.Django,
        description:
          'I learned Django for the first company I worked for. Django is a high-level web framework that follows the model-view-controller (MVC) architectural pattern. It provides a lot of built-in features and follows best practices, which helps me develop robust and scalable applications efficiently. It was easy because I already knew Laravel that time.',
        icon: backendIcons[BackendSkill.Django],
      },
      {
        title: BackendSkill.Laravel,
        description:
          'I learned Laravel as the first backend framework for PHP for creating web applications and APIs. It follows the model-view-controller (MVC) architectural pattern and provides a lot of built-in features that make development faster and easier. I found its elegant syntax and extensive documentation helpful in getting started quickly. This is the first backend framework I learned because of the bootcamp I attended for beginner web developers.',
        icon: backendIcons[BackendSkill.Laravel],
      },
    ],
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
