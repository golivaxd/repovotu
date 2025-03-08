const express = require('express');
const router = express.Router();
const pool = require('./db');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Ruta para obtener un usuario específico por ID
router.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Usuarios WHERE id_usuario = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Ruta para crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  const { nombre_usuario, correo_electronico, contrasena, ubicacion, tipo_usuario } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Usuarios (nombre_usuario, correo_electronico, contrasena, ubicacion, tipo_usuario) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nombre_usuario, correo_electronico, contrasena, ubicacion, tipo_usuario]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Ruta para actualizar un usuario
router.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre_usuario, correo_electronico, contrasena, ubicacion, tipo_usuario } = req.body;
  try {
    const result = await pool.query(
      'UPDATE Usuarios SET nombre_usuario = $1, correo_electronico = $2, contrasena = $3, ubicacion = $4, tipo_usuario = $5 WHERE id_usuario = $6 RETURNING *',
      [nombre_usuario, correo_electronico, contrasena, ubicacion, tipo_usuario, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Ruta para eliminar un usuario
router.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM Usuarios WHERE id_usuario = $1 RETURNING *', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
