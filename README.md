## Issue Tracker App

- npm install react-icons
- npm i classnames
- Installed MySQL
- DataGrip
- setting up prisma
- npm i prisma
- npx prisma init
- npx prisma format - after creating issue model
- npx prisma migrate dev - initial migration

# DataGrip

- new project > Issue Tracker
- Database Explorer > Data Source > MySql
- host : localhost, Port : 3306, Username : root, password : YourPassword, Database : issue-tracker
- update driver(if available) - that link at bottom
- Test Connection

# Building an API

- npm i zod - validations
- to store issue in Database, we need prisma client, single instance of prisma client
- search next.js prisma client, we get sample code for creating instance of prisma client
- prisma folder create client.ts then paste that code

# Radix-ui

- npm install @radix-ui/themes
- Import the global CSS file at the root of your application.
- Add Theme to your application, wrapping the root component inside of body.
