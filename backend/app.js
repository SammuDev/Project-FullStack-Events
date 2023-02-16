const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
