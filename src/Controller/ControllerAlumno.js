const modelAlumno = require("../model/ModelAlumnos");


const RegistrarmAlumno = async (req, res) => {

    const { nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion } = req.body

    const newAlumno = new modelAlumno({
        nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion
    })

    const newAl = await newAlumno.save();

    console.log(newAl);
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