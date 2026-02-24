const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_FILE = './data/shipments.json';
const PORT = process.env.PORT || 3000;

// Ensure data directory exists
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({}));
}

function readData() {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    } catch {
        return {};
    }
}

function writeData(data) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const url = req.url;
    
    // API: Get all shipments
    if (url === '/api/shipments' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(readData()));
        return;
    }
    
    // API: Get single shipment
    if (url.startsWith('/api/shipments/') && req.method === 'GET') {
        const trackNum = url.split('/')[3];
        const data = readData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data[trackNum] || null));
        return;
    }
    
    // API: Create/Update shipment
    if (url === '/api/shipments' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const shipment = JSON.parse(body);
                const data = readData();
                data[shipment.trackingNumber] = shipment;
                writeData(data);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
            } catch {
                res.writeHead(400);
                res.end('Invalid data');
            }
        });
        return;
    }
    
    // Serve static files
    let filePath = '.' + url;
    if (filePath === './') filePath = './index.html';
    
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json'
    };
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/html' });
        res.end(content);
    });
});

server.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
