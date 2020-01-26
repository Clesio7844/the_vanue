const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('APP Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever stated on port ${PORT}`));
