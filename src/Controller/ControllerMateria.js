const modelMateria = require("../model/ModelMateria");

const Registrarmateria = async (req, res) => {

    const { nombre, icono, profesor, evaluaciones } = req.body

    const newMateria = new modelMateria({
        nombre, icono, profesor, evaluaciones, profesor
    })

    const newMat = await newMateria.save();

    const MT = await modelMateria.findOne({ nombre })//.populate("Evaluacion").populate("Profesor");


    return res.status(200).send(
        MT
    );
}


const getMateria = async (req, res) => {

    if (!req.body?.filtro) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.body

    const materia = await modelMateria.findOne(filtro).populate("Evaluacion").populate("Profesor");
    return res.status(200).json(
        materia
    );
}
const getMaterias = async (req, res) => {
    const materia = await modelMateria.find()//.populate("Evaluacion").populate("Profesor");

    return res.status(200).json(
        materia
    );
}




module.exports = { Registrarmateria, getMateria, getMaterias }