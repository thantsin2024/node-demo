const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Node.js App Deployed via Jenkins + Docker!');
});


app.get('/test', (req, res) => {
    res.send('hello world');
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
