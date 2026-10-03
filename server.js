const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Public folder
const publicPath = path.join(__dirname, 'public');

// Serve HTML, CSS, JS and images
app.use(express.static(publicPath));

// Homepage
app.get('/', (req, res) => {
    res.sendFile(
        path.join(publicPath, 'index.html')
    );
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 404 - IMPORTANT: app.get('*') mat use karna
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Render requires 0.0.0.0 + process.env.PORT
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
