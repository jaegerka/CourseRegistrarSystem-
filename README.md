# CourseRegistrarSystem

This project is a course registrar system intended to be used by students, professors, and administrators.

**Technologies used:**
- Angular & Typescript
- Java with Spring and H2 Database

**The code is split into two sections**
1. evenhealth-ui: front-end repository of Angular code
2. evenhealth-java: Java back-end code
*Communication between the frontend and backend is performed through RESTful APIs.*

**Steps to Start the Application:**
- Clone the repository using git clone
- Import the Java code as a Maven project in a code editor, such as Spring Tool Suite
- Once imported, right click on the demo folder in the file directory
- Select Run As > Spring Boot App
- Open the Angular Code in a code editor such as Visual Studio Code
- Open the terminal in Visual Studio Code and run the following commands*
      npm i
      ng serve -o 
- Once this is completed, you should see a login screen displayed in your browser. 
      
*Please note: The Angular code requires npm.  Instructions to install npm if not already on your computer are here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

**How to use the application**
*Please know that I was not able to complete everything I wish I could have in this application.  I have listed the things I would have liked to implemented in a section below.*
The application displays different information based on which kind of user is logged in. 
To login as an administrator, please use:
- username: admin01
- password: password 
To login as a professor, please use:
- username: professor01
- password: password 
To login as a professor, please use:
- username: student01
- password: password 
To delete a user as an admin:
- Delete currently only works on deleting the first user -- Kaleigh Jaeger.
- Press Delete
- Reload the Page

**To run tests in the Java application**
- Navigate to src/test/java > com/evenhealth/demo
- Right click on TestRunner.java
- Click "Run as" > "Java Application"
- For each test, it will return true if it passed or false if it failed*
*Tests are written in the files within the folder (ex. CourseServiceTest.java)

**Thing I would've liked to have implemented**
- Adding and pulling in data for Professor table
- Adding and pulling in data for Student enrolled courses table
- Functionality for enroll, unenroll, delete course, edit course, and edit student buttons
- Security
- Validation for user login 
- A two-factor authentication system for logging in/registering as a new user
- Validation for creating a new user & creating a new course 
- A check on the backend to tell whether a user was an admin, professor, or student 
- A lot more testing with Mockito and JUnit
- A lot more features, these are just a few that came to mind.
      
