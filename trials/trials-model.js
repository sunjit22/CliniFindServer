const mongoose = require('mongoose');
const trialSchema = require('./trials-schema');
const trialModel = mongoose
    .model('TrialModel', trialSchema);
module.exports = trialModel;