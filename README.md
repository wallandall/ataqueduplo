# Ataque Duplo

Ataque Duplo is a BJJ Academy based in Hannover Germany, this application is developed using the MERN Stack and allows members to collaborate and share information relating to Brazilian Jiu Jitsu, and health & fitness.

## Config

To ensure this application runs correctly, ensure the following files are added to the (default.json for Development and prod.json for Production ) project with the below configuration
: `config/default.json` and `config/production.json`the file requires the following configuration:
`{ "mongoURI": "YOUR_CONNECTION_STRING , "jwtSecret": "YOU_JWT_TOKEN" }`

## Deployment

Run `npm run build` from the client folder to build static files
