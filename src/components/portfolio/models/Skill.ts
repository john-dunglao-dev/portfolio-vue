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

export const CODING_SKILL_ICON = 'devicon-htmx-plain'

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
  Vagrant = 'Vagrant',
  VirtualBox = 'VirtualBox',
}

export const devopsIcons: Record<DevOpsSkill, string> = {
  [DevOpsSkill.Git]: 'devicon-git-plain',
  [DevOpsSkill.Docker]: 'devicon-docker-plain',
  [DevOpsSkill.GCP]: 'devicon-googlecloud-plain',
  [DevOpsSkill.DigitalOcean]: 'devicon-digitalocean-plain',
  [DevOpsSkill.Vagrant]: 'devicon-vagrant-plain',
  [DevOpsSkill.VirtualBox]: 'devicon-oracle-original',
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
  CI_CD = 'CI/CD',
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
      {
        title: FrontendSkill.React,
        description:
          'This is the newest frontend framework I learned. I tried it now since it is the most in-demand frontend framework in the industry today. React is a popular JavaScript library for building user interfaces. I appreciate its component-based architecture and the ability to create reusable UI components. It has a large ecosystem and community support, which makes it easier to find resources and libraries for various use cases.',
        icon: frontendIcons[FrontendSkill.React],
      }
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
      {
        title: BackendSkill.Flask,
        description:
          'I learned Flask for a personal project that required a lightweight and flexible web framework. Flask is a micro-framework that provides the essentials for building web applications without unnecessary bloat. I appreciated its simplicity and extensibility, which allowed me to customize my application according to my needs.',
        icon: backendIcons[BackendSkill.Flask],
      },
      {
        title: BackendSkill.Java,
        description:
          'I learned Java as a requirement for a specific freelance project. I thought it was challenging at first due to its syntax and object-oriented programming concepts. However, I gradually became comfortable with it and appreciated its robustness and scalability for building enterprise-level applications.',
        icon: backendIcons[BackendSkill.Java],
      },
      {
        title: BackendSkill.Springboot,
        description:
          'I learned Spring Boot as the backend framework for Java for creating web applications and APIs. Spring Boot simplifies the setup and configuration of Spring applications, allowing me to focus on writing business logic. I found its extensive ecosystem and community support beneficial in building robust and scalable applications.',
        icon: backendIcons[BackendSkill.Springboot],
      },
    ],
  },
  {
    label: 'DevOps Skills',
    skills: [
      {
        title: DevOpsSkill.Git,
        description:
          'I learned Git in the bootcamp I attended as a beginner web developer. It is a distributed version control system that allows me to track changes in my code, collaborate with others, and manage different versions of my projects. I found it essential for effective teamwork and code management.',
        icon: devopsIcons[DevOpsSkill.Git],
      },
      {
        title: DevOpsSkill.Docker,
        description:
          'I already learned Docker when I am learning using my personal projects. It was further polished when I worked with my previous company. Docker is a containerization platform that allows me to package applications and their dependencies into lightweight, portable containers. I found it useful for ensuring consistency across different environments and simplifying deployment processes.',
        icon: devopsIcons[DevOpsSkill.Docker],
      },
      {
        title: DevOpsSkill.Vagrant,
        description:
          'I learned Vagrant to create and manage reproducible development environments. Vagrant is a tool for building and managing virtualized development environments using simple configuration files. I found it helpful for ensuring that my development environment is consistent with production and for easily sharing my setup with others.',
        icon: devopsIcons[DevOpsSkill.Vagrant],
      },
      {
        title: DevOpsSkill.VirtualBox,
        description:
          'I learned VirtualBox as a free and open-source virtualization software. VirtualBox allows me to run multiple operating systems on my computer, making it easier to test applications in different environments. I found it useful for creating isolated development environments and for learning about different operating systems.',
        icon: devopsIcons[DevOpsSkill.VirtualBox],
      },
    ],
  },
  {
    label: 'Database Skills',
    skills: [
      {
        title: DatabaseSkill.MySQL,
        description:
          'I learned MySQL as the first database management system I worked with. It is a popular relational database that uses structured query language (SQL) for managing and manipulating data. I found it easy to understand and work with, especially for small to medium-sized applications.',
        icon: databaseIcons[DatabaseSkill.MySQL],
      },
      {
        title: DatabaseSkill.PostgreSQL,
        description:
          'I learned PostgreSQL for the first company I worked with and found it to be a powerful database solution. PostgreSQL is an open-source relational database that offers a wide range of features, including support for complex queries, data integrity, and extensibility. I appreciated its robustness and performance for handling large datasets.',
        icon: databaseIcons[DatabaseSkill.PostgreSQL],
      },
      {
        title: DatabaseSkill.Redis,
        description:
          'I learned Redis as a NoSQL database for caching and real-time data storage. Redis is an in-memory data structure store that provides high performance and low latency. I found it useful for improving the speed and responsiveness of applications by storing frequently accessed data in memory.',
        icon: databaseIcons[DatabaseSkill.Redis],
      },
      {
        title: DatabaseSkill.Elasticsearch,
        description:
          'I learned Elasticsearch for a project that required advanced search capabilities. Elasticsearch is a distributed search and analytics engine that allows for fast and efficient searching of large datasets. I found it valuable for implementing powerful search functionalities in applications.',
        icon: databaseIcons[DatabaseSkill.Elasticsearch],
      },
      {
        title: DatabaseSkill.MongoDB,
        description:
          'I learned MongoDB as a NoSQL database for handling unstructured data. MongoDB is a document-oriented database that stores data in flexible, JSON-like documents. I appreciated its scalability and ease of use, especially for applications that require rapid development and iteration.',
        icon: databaseIcons[DatabaseSkill.MongoDB],
      },
    ],
  },
  {
    label: 'Practiced Skills',
    skills: [
      {
        title: PracticedSkill.RESTfulAPI,
        description:
          'I have experience designing and implementing RESTful APIs for various web applications. I understand the principles of REST and how to create APIs that are scalable, maintainable, and easy to use.',
        icon: CODING_SKILL_ICON,
      },
      {
        title: PracticedSkill.TDD,
        description:
          'I practice Test-Driven Development (TDD) in my projects to ensure code quality and reliability. I write tests before implementing features, which helps me catch bugs early and improve the overall design of my code.',
        icon: CODING_SKILL_ICON,
      },
      {
        title: PracticedSkill.CI_CD,
        description:
          'I have experience setting up Continuous Integration/Continuous Deployment (CI/CD) pipelines to automate the build, test, and deployment processes. This helps me deliver updates quickly and reliably while maintaining high code quality.',
        icon: CODING_SKILL_ICON,
      },
      {
        title: PracticedSkill.Containerization,
        description:
          'I utilize containerization technologies like Docker to create consistent and portable development and deployment environments. This allows me to streamline the deployment process and ensure that applications run smoothly across different environments.',
        icon: CODING_SKILL_ICON,
      },
    ],
  },
]
