const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir contenido estático
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '¡Hola! ' });
});

// Ruta que simula una API para tu app móvil
app.get('/api/data', (req, res) => {
  res.json({ data: 'Dato desde el backend' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
