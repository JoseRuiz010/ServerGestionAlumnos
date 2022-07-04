const mongoose = require('mongoose');

const evaluacionAlumnoSchema = mongoose.Schema({
    nota: Number,
    evaluacion: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluacion' },
    alumno: { type: mongoose.Schema.Types.ObjectId, ref: 'Alumno' },
    materia: { type: mongoose.Schema.Types.ObjectId, ref: 'Materia' },
}, {
    timestamps: true,
    versionKey: false
});

const modelEvaluacionAlumno = mongoose.model('EvaluacionAlumno', evaluacionAlumnoSchema);
module.exports = modelEvaluacionAlumno