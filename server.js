const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve the index.html file only for HTML requests
app.get('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } else {
    res.status(404).send('Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
