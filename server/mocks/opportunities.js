const { v4: uuid } = require("uuid");

const opportunities = [
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-boot.svg",
    title: "Spring Boot",
    description: `Takes an opinionated view of building Spring applications
             and gets you up and running as quickly as possible.`,
  },
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-framework.svg?v=2",
    title: "Spring Framework",
    description: `Provides core support for dependency injection, transaction
            management, web apps, data access, messaging, and more.`,
  },
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-data.svg",
    title: "Spring Data",
    description: `Provides a consistent approach to data access – relational,
            non-relational, map-reduce, and beyond.`,
  },
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-cloud.svg",
    title: "Spring Cloud",
    description: `Provides a set of tools for common patterns in distributed
            systems. Useful for building and deploying microservices.`,
  },
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-data-flow.svg",
    title: "Spring Data Flow",
    description: `Provides an orchestration service for composable data
            microservice applications on modern runtimes.`,
  },
  {
    id: uuid(),
    img: "https://spring.io/img/projects/spring-security.svg",
    title: "Spring Security",
    description: `Protects your application with comprehensive and extensible
            authentication and authorization support.`,
  },
];

module.exports = opportunities;
