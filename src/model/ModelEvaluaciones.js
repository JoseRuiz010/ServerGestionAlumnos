const mongoose = require('mongoose');

const evaluacionSchema = mongoose.Schema({

    descripcion: String,
}, {
    timestamps: true,
    versionKey: false
});

const modelEvaluacion = mongoose.model('Evaluacion', evaluacionSchema);
module.exports = modelEvaluacion