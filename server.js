// imports
const express = require('express');

const app = express();
const path = require('path');

const port = process.env.PORT || 5001;

// config needed vars
const root = path.join(__dirname, 'build');

// server config
app.use(express.static(root));
app.get('/', (req, res) => {
  res.sendFile('index.html', { root });
});

app.get('/toto', (req, res) => res.json({ toto: 'titi' }));
app.post('/commande', (req, res) => console.log(req.body);
app.delete("/commande/1234", () =>)
// start server
app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
