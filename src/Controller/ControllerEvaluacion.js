const modelEvaluacion = require("../model/ModelEvaluaciones");


const RegistrarEvaluacion = async (req, res) => {

    const { descripcion } = req.body

    const newEvaluacion = new modelEvaluacion({
        descripcion
    })

    const newEva = await newEvaluacion.save();

    // const MT = await modelMateria.findOne({ nombre }).populate("profesor")//.populate("evaluaciones");


    return res.status(200).send(
        newEva
    );
}


const getEvaluacion = async (req, res) => {

    if (!req.body?.filtro) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.body

    const evalucacion = await modelEvaluacion.findOne(filtro);
    return res.status(200).json(
        evalucacion
    );
}
const getEvaluaciones = async (req, res) => {
    const evaluacion = await modelEvaluacion.find();

    return res.status(200).json(
        evaluacion
    );
}




module.exports = { RegistrarEvaluacion, getEvaluacion, getEvaluaciones }