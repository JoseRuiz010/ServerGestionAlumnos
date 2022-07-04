const modelAlumno = require("../model/ModelAlumnos");
const modelCurso = require("../model/ModelCurso");


const RegistrarmAlumno = async (req, res) => {

    const { nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion, curso } = req.body
    console.log(nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion, curso);
    const newAlumno = new modelAlumno({
        nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion
    })

    const newAl = await newAlumno.save();
    const cursoById = await modelCurso.findOne({ _id: curso })
    console.log(cursoById);
    await cursoById.alumnos.push(newAl);
    await cursoById.save()
    console.log(cursoById);
    return res.status(200).send(
        newAl
    );
}


const getAlumno = async (req, res) => {

    if (!req.body?.filtro) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.body

    const alumno = await modelAlumno.findOne(filtro);
    return res.status(200).json(
        alumno
    );
}
const getAlumnos = async (req, res) => {
    const alumnos = await modelAlumno.find();

    return res.status(200).json(
        alumnos
    );
}




module.exports = { RegistrarmAlumno, getAlumno, getAlumnos }