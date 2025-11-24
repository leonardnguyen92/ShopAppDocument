# Initialize Spring Project

## Requirement

- Java 17 or later

- Gradle 7.5+ or Maven 3.5+

- You can also import the code straight into your IDE: Spring Tool Suite (STS), IntelliJ IDEA, VSCode

---

## Spring initializr

- Visit the website [Spring](https://start.spring.io/) or STS(or IntelliJ) is integrated when creating a project.

### Project Declaration

- Project: choose which package manager, Maven or Gradle.
- Language: choose the code language, here I choose Java
- Spring Boot: Versions with SNAPSHOT are unstable versions, should not be selected
- Packaging: with Spring Boot, you should choose JAR to avoid configuring Tomcat server
- Java: choose java 11 for stability ()<br>
  In addition, you also need to declare additional metadata such as project name, package name, artifact,...

### Dependency

- Spring Web
- Spring Data JPA
- Lombok
- MySQL Driver
- Validation
  ![Spring Initialize](/images/Spring.JPG)
