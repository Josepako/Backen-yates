const express = require("express");
const router = express.Router();
const yatesController = require("../controllers/Yates.controllers");

// Ruta para crear un nuevo yate
router.post("/", yatesController.crearYate);

// Ruta para obtener todos los yates
router.get("/", yatesController.obtenerYates);

// Ruta para obtener un yate por su ID
router.get("/:id", yatesController.obtenerYatePorId);

// Ruta para actualizar un yate por su ID
router.put("/:id", yatesController.actualizarYate);

// Ruta para eliminar un yate por su ID
router.delete("/:id", yatesController.eliminarYate);

module.exports = router;