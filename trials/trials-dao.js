const trialModel = require('./trials-model');

const findAllTrials = () =>
    trialModel.find();

const findTrialById = (id) =>
    trialModel.findById(id);

const createTrial = (trial) =>
    trialModel.create(trial);

const updateTrial = (id, trial) =>
    trialModel.updateOne({_id: id}, {
        $set: trial
    });

const deleteTrial = (id) =>
    trialModel.deleteOne({_id: id});


module.exports = {
    findAllTrials, findTrialById, createTrial,
    updateTrial,
    deleteTrial
};