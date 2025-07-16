const express = require('express');
const app = express();
const cors = require('cors'); // Para que el frontend pueda conectarse sin bloqueo
const usersRoutes = require('./rutas/users');

const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', usersRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
