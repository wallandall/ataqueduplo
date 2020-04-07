const express = require('express');

const connectDB = require('./config/bd');

const app = express();

connectDB();

app.get('/', (req, res) => res.send('Ataque Duplo'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
