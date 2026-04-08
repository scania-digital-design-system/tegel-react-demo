const express = require('express');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const BUILD_DIR = path.join(__dirname, 'build');

// Serve index.html with a fresh nonce on every request
app.get('/', (req, res) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  let html = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

  // Replace all nonce placeholders with the generated nonce
  html = html.replace(/\*\*CSP_NONCE\*\*/g, nonce);

  // Also add nonce to any CRA-injected <script> tags that don't have one
  html = html.replace(/<script(?![^>]*nonce)([ >])/g, `<script nonce="${nonce}"$1`);

  res.send(html);
});

// Serve static files from the build directory
app.use(express.static(BUILD_DIR));

// Catch-all for client-side routing - also inject nonce
app.get('*', (req, res) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  let html = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');

  html = html.replace(/\*\*CSP_NONCE\*\*/g, nonce);
  html = html.replace(/<script(?![^>]*nonce)([ >])/g, `<script nonce="${nonce}"$1`);

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`CSP nonce test server running at http://localhost:${PORT}`);
});
