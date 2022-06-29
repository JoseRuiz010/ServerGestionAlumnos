const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    curso: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }]
}, {
    timestamps: true,
    versionKey: false
});

const modelUser = mongoose.model('User', userSchema);
module.exports = modelUser