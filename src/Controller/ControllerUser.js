const modelUser = require("../model/ModelUser");


const RegistrarUsuario = async (req, res) => {

    const { username, password, curso } = req.body

    const newUser = new modelUser({
        username, password, curso
    })

    const newUs = await newUser.save();

    const NU = await modelUser.findOne({ username: newUs.username }).populate("curso");


    return res.status(200).send(
        NU
    );
}


const getUser = async (req, res) => {

    if (!req.query) return res.send("No mando la condicion de busqueda")
    const filtro = req.query
    const user = await modelUser.findOne(filtro).populate(
        {
            path: "curso",
            model: 'Curso',
            populate: {
                path: "alumnos",
                model: "Alumno",
            },


        }).populate(
            {
                path: "curso",
                model: 'Curso',
                populate: {
                    path: "materias",
                    model: "Materia",
                    populate: {
                        path: "evaluaciones",
                        model: "Materia",
                    }
                },


            })

    return res.status(200).json(
        user
    );
}
const getUsers = async (req, res) => {
    const user = await modelUser.find().populate(
        {
            path: "curso",
            model: 'Curso',
            populate: {
                path: "alumnos",
                model: "Alumno",
            },


        }).populate(
            {
                path: "curso",
                model: 'Curso',
                populate: {
                    path: "materias",
                    model: "Materia",
                    populate: {
                        path: "evaluaciones",
                        model: "Materia",
                    }
                },


            })

    return res.status(200).json(
        user
    );
}




module.exports = { RegistrarUsuario, getUser, getUsers }