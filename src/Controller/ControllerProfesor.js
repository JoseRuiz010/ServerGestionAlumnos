const modelProfesor = require("../model/ModelProfesor");


const RegistrarProfesor = async (req, res) => {

    const { nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion } = req.body

    const newProfesor = new modelProfesor({
        nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion
    })

    const newAPro = await newProfesor.save();

    console.log(newAPro);
    return res.status(200).send(
        newAPro
    );
}


const getProfesor = async (req, res) => {

    if (!req.body?.filtro) return res.send("No mando la condicion de busqueda")
    const { filtro } = req.body

    const profesor = await modelProfesor.findOne(filtro);
    return res.status(200).json(
        profesor
    );
}
const getProfesores = async (req, res) => {
    const alumnos = await modelProfesor.find();

    return res.status(200).json(
        alumnos
    );
}




module.exports = { RegistrarProfesor, getProfesor, getProfesores }