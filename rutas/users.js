const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Ruta del archivo donde se guardan los usuarios
const dataPath = path.join(__dirname, '..', 'data.json');

// POST - Agregar nuevo usuario
router.post('/', (req, res) => {
  const { nombre, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ message: 'Nombre y email son requeridos' });
  }

  // Leer usuarios actuales
  const data = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath)) : [];

  // Agregar el nuevo usuario
  const nuevoUsuario = { id: Date.now(), nombre, email };
  data.push(nuevoUsuario);

  // Guardar en el archivo
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(201).json({ message: 'Usuario guardado exitosamente', usuario: nuevoUsuario });
});

// GET - Listar todos los usuarios
router.get('/', (req, res) => {
  const data = fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath)) : [];
  res.json(data);
});

module.exports = router;
