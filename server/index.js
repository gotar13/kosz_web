// Importáljuk a szükséges modulokat
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 80;

// CORS engedélyezése
app.use(cors());

// JSON képes request body-k olvasása
app.use(express.json());

// Példa API végpont
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// Statikus fájlok kiszolgálása (majd a buildelt React appnak)
app.use(express.static(path.join(__dirname, '../client/dist')));

// Minden más útvonalra a React app index.html fájlt küldjük
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`Szerver fut a http://localhost:${PORT} címen`);
});