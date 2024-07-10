const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Catch-all route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
