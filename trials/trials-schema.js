const mongoose = require('mongoose');
const trialSchema = mongoose.Schema({
    BriefTitle: String,
    BriefSummary: String,
    Location: String,
    numParticipants: Number,
    RecruitmentStatus: String,
    startDate: Date,
    endDate: Date,
}, {collection: 'trials'});
module.exports = trialSchema;