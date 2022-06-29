const mongoose = require('mongoose');

const alumnoSchema = mongoose.Schema({

    nombre: String,
    apellido: String,
    telefono: String,
    email: String,
    legajo: String,
    direccion: String

}, {
    timestamps: true,
    versionKey: false
});

const modelAlumno = mongoose.model('Alumno', alumnoSchema);
module.exports = modelAlumno

/*
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://joseruiz:1234@cluster0.jc3kc.mongodb.net/DBMyalo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(db => console.log('Db is conect'))
    .catch(err => console.log(err));

}
*/