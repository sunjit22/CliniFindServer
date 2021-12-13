const trialDao = require('./trials-dao');

module.exports = (app) => {
  const createTrial = (req, res) => {
    trialDao.createTrial(req.body)
        .then(trial => {
        req.session['trial'] = trial;
        res.json(trial)});
  }


  const findAllTrials = (req, res) =>
    trialDao.findAllTrials()
      .then(trials => res.json(trials));

  const findTrialById = (req, res) =>
    trialDao.findTrialById(req.NCTId)
      .then(trial => res.json(trial));

  const deleteTrial = (req, res) =>
    trialDao.deleteTrial(req.params.NCTId)
      .then(status => req.send(status));

  const updateTrial = (req, res) =>
    trialDao.updateTrial(req.body)
      .then(status => req.send(status));

  app.put('/api/trials', updateTrial);
  app.post('/api/newtrial', createTrial);
  app.delete('/api/trials/:NCTId', deleteTrial);
  app.get('/api/trials', findAllTrials);
  app.get('/api/trials/:NCTId', findTrialById);
};