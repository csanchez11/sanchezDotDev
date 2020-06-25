const express = require('express');
const path = require('path');

const app = express()
const port = 3000


app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/resume', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/Assets/ResumeChrisSanchez.pdf'));
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));