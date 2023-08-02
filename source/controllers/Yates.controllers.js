const Yates = require("../Model/Yates");

// Crear un nuevo yate
const crearYate = async (req, res) => {
  try {
    const { nombre, descripcion, precio, Longitud } = req.body;

    const nuevoYate = new Yates({ nombre, descripcion, precio, Longitud });
    await nuevoYate.save();

    res.status(201).json({ mensaje: "Yate creado exitosamente", yate: nuevoYate });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al crear el yate" });
  }
};


// Obtener todos los yates
const obtenerYates = async (req, res) => {
  try {
    const yates = await Yates.find({});

    res.status(200).json({
      mensaje: "Lista de yates",
      yates,
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los yates" });
  }
};

// Obtener un yate por su ID
const obtenerYatePorId = async (req, res) => {
  try {
    const { id } = req.params;

    const yate = await Yates.findById(id);

    if (!yate) {
      return res.status(404).json({ mensaje: "Yate no encontrado" });
    }

    res.json({ yate });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el yate" });
  }
};

// Actualizar un yate por su ID
const actualizarYate = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const yate = await Yates.findByIdAndUpdate(id, { nombre, descripcion }, { new: true });

    if (!yate) {
      return res.status(404).json({ mensaje: "Yate no encontrado" });
    }

    res.json({ mensaje: "Yate actualizado exitosamente", yate });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el yate" });
  }
};

// Eliminar un yate por su ID
const eliminarYate = async (req, res) => {
  try {
    const { id } = req.params;

    const yate = await Yates.findByIdAndDelete(id);

    if (!yate) {
      return res.status(404).json({ mensaje: "Yate no encontrado" });
    }

    res.json({ mensaje: "Yate eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el yate" });
  }
};

module.exports = {
  crearYate,
  obtenerYates,
  obtenerYatePorId,
  actualizarYate,
  eliminarYate,
};
