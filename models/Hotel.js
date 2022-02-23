const {Schema, model} = require('mongoose');

const schema = new Schema({
    id: { type: Number, require: true, unique: true },
    name: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    img: { type: String, require: true },
    rooms: { type: Array, require: true }
});

module.exports = model('Hotel', schema);