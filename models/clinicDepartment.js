const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: 'string', required: true},

})

const staffModel = mongoose.model('staff', staffSchema)
 
module.exports = staffModel