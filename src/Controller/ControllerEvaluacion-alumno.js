const modelAlumno = require("../model/ModelAlumnos");
const modelEvaluacionAlumno = require("../model/ModelEvaluaciones-alumnos");
const modelMateria = require("../model/ModelMateria");


const RegistrarEvaluacionNota = async (req, res) => {

    const { notas,
        idEvaluacion,
        alumno,
        idMateria } = req.body

    console.log(notas, idMateria, idEvaluacion);
    let idsAlumnos = (Object.keys(notas));

    idsAlumnos.map(async (_id, i) => {
        //await modelEvaluacionAlumno.updateOne({ materia: idMateria, evaluacion: idEvaluacion, alumno: _id }, { nota: parseInt(notas[_id]) })
        const newNotaEvaluacion = new modelEvaluacionAlumno({
            nota: notas[_id],
            evaluacion: idEvaluacion,
            alumno: _id,
            materia: idMateria
        })
        const e = await (newNotaEvaluacion.save());

    })


    return res.status(200).send(
        "Se crearon las notas"
    );
}


const getEvaluacionAlumno = async (req, res) => {

    if (!req.query) return res.send("No mando la condicion de busqueda")
    const filtro = req.query
    console.log(filtro);

    const materia = await modelMateria.find(filtro.materia ? { _id: filtro.materia } : {}).populate("evaluaciones").populate("profesor");
    console.log(materia);

    // if (filtro.alumno) {
    const alumnos = await modelAlumno.find(filtro.alumno ? { _id: filtro.alumno } : {});
    console.log("Paso el alumno");
    // }
    const evaluacionesData = await modelEvaluacionAlumno.find(filtro).populate('alumno').populate('materia').populate('evaluacion');

    const notasXmateria = []

    materia.map(m => {
        notasXmateria.push(
            {
                materia: m,
                alumnos: alumnos.map(a => (
                    {
                        alumnoNombre: a,
                        evaluaciones: evaluacionesData.filter(eva => JSON.stringify(eva?.alumno?._id) === JSON.stringify(a?._id) && JSON.stringify(eva?.materia?._id) === JSON.stringify(m?._id))
                    }
                ))
            })
    }
    )


    // console.log(evaluacionesData);



    return res.status(200).json(
        notasXmateria
    );
}
const getEvaluacionAlumnos = async (req, res) => {
    const evaluacionesAlumnos = await modelEvaluacionAlumno.find().populate('evaluacion').populate('materia').populate('alumno')

    return res.status(200).json(
        evaluacionesAlumnos
    );
}
const getEvaluacionAlumnoById = async (req, res) => {
    if (!req.query) return res.send("No mando la condicion de busqueda")
    const filtro = req.query
    console.log(filtro);
    const evaluacionesAlumnos = await modelEvaluacionAlumno.findOne(filtro).populate('evaluacion').populate('materia').populate('alumno')

    return res.status(200).json(
        evaluacionesAlumnos
    );
}
const updateEcavluacionAlumno = async (req, res) => {
    const { notas, idMateria, idEvaluacion } = req.body
    console.log(notas, idMateria, idEvaluacion);
    let idsAlumnos = (Object.keys(notas));
    console.log(idsAlumnos);
    idsAlumnos.map(async (_id, i) => {
        await modelEvaluacionAlumno.updateOne({ materia: idMateria, evaluacion: idEvaluacion, alumno: _id }, { nota: parseInt(notas[_id]) })
    })
    return res.status(200).json(
        "evaluacionesAlumnos"
    );
}




module.exports = { RegistrarEvaluacionNota, getEvaluacionAlumno, getEvaluacionAlumnos, updateEcavluacionAlumno, getEvaluacionAlumnoById }