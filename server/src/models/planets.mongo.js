const mongoose = require('mongose');

const planetSchema = new mongoose.Shema({
    keplerName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Planet', planetSchema);