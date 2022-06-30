const modelMateria = require("../model/ModelMateria");

const Registrarmateria = async (req, res) => {

    const { nombre, icono, profesor, evaluaciones } = req.body

    const newMateria = new modelMateria({
        nombre, icono, profesor, evaluaciones, profesor
    })

    const newMat = await newMateria.save();

    const MT = await modelMateria.findOne({ nombre }).populate("evaluaciones").populate("profesor");


    return res.status(200).send(
        MT
    );
}


const getMateria = async (req, res) => {


    if (!req.query) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.query
    const materia = await modelMateria.findOne(filtro).populate("evaluaciones").populate("profesor");
    return res.status(200).json(
        materia
    );
}
const getMaterias = async (req, res) => {
    const materia = await modelMateria.find().populate("evaluaciones").populate("profesor");

    return res.status(200).json(
        materia
    );
}




module.exports = { Registrarmateria, getMateria, getMaterias }