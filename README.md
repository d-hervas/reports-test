# Reports test

This is a Node.js Express server that exposes an API and also serves a React frontend to see the reports.

In order to run the project:

- You need Node.js (almost any modern version should work, but use the latest LTS for safety)
- Install the packages in the root and `client` project with `npm install`
- `npm start` in the root folder. This starts the API on port 3000
- `npm start` in the `client` folder to start your frontend in another port. Or `npm build` if you don't want to start another development server - the Express.js server started before will serve the built React project.

## Things to note
 - The reports are loaded in memory, modified in memory and not saved anywhere. The task description didn't note anything regarding a database so I didn't include one.

- Blocking changes the state and doesn't really do much else. I think that's OK since we don't have access to the actual content or any other related systems in order to do anything with it.