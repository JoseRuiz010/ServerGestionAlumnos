const mongoose = require('mongoose');

const materiaSchema = mongoose.Schema({

    nombre: String,
    icono: String,
    profesor: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' },
    evaluaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evaluacion' }]
}, {
    timestamps: true,
    versionKey: false
});

const modelMateria = mongoose.model('Materia', materiaSchema);
module.exports = modelMateria