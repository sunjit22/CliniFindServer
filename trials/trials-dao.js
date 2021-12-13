const trialModel = require('./trials-model');

const findAllTrials = () =>
  trialModel.find();

const findTrialById = (NCTId) =>
  trialModel.findById(NCTId);

const createTrial = (trial) =>
  trialModel.create(trial);

const updateTrial = (trial) =>
  trialModel.updateOne({NCTId: trial.NCTId}, {
    $set: trial
  });

const deleteTrial = (NCTId) =>
  userModel.deleteOne({_id: userId});


module.exports = {
  findAllTrials, findTrialById, createTrial,
  updateTrial,
  deleteTrial
};
