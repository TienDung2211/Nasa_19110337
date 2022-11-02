const http = require('http');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model')

const POST = process.env.POST || 8000;

const server = http.createServer(app);

async function startServer() {
    await loadPlanetsData();
    
    server.listen(POST, () => {
        console.log(`Listening on port ${POST}...`)
    });
}

startServer();


