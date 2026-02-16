const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('AidConnect Backend Running');
});

function checkDuplicateAid(existing, incoming) {
  return (
    existing.category === incoming.category &&
    existing.beneficiaryId === incoming.beneficiaryId
  );
}

module.exports = { app, checkDuplicateAid };
