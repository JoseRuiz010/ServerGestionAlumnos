const modelCurso = require("../model/ModelCurso");

const RegistrarCurso = async (req, res) => {

    const { descripcion, alumnos, materias } = req.body

    const newCurso = new modelCurso({
        descripcion, alumnos, materias
    })

    const newCur = await newCurso.save();

    // const MT = await modelCurso.findOne({ nombre }).populate("profesor")//.populate("evaluaciones");


    return res.status(200).send(
        newCur
    );
}


const getCurso = async (req, res) => {

    if (!req.body?.filtro) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.body

    const curso = await modelCurso.findOne(filtro)//.populate("Evaluacion").populate("Profesor");
    return res.status(200).json(
        curso
    );
}
const getCursos = async (req, res) => {
    const curso = await modelCurso.find()//.populate("Evaluacion").populate("Profesor");

    return res.status(200).json(
        curso
    );
}




module.exports = { RegistrarCurso, getCurso, getCursos }