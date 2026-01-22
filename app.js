const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('test test test')
  res.send('🚀 Node.js App Deployed via Jenkins + Docker!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
