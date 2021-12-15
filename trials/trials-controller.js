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
        trialDao.findTrialById(req.params.id)
            .then(trial => res.json(trial));

    const deleteTrial = (req, res) =>
        trialDao.deleteTrial(req.params.id)
            .then(status => req.send(status));

    const updateTrial = (req, res) =>
        trialDao.updateTrial(req.params.id, req.body)
            .then(status => req.send(status));

    app.put('/api/trials/:id', updateTrial);
    app.post('/api/newtrial', createTrial);
    app.delete('/api/trials/:id', deleteTrial);
    app.get('/api/displaytrials', findAllTrials);
    app.get('/api/displaytrials/:id', findTrialById);
};