const genParticipants = require("../functions/genRandonParticipants");

module.exports = {
  index(req, res) {
    const participantsQuantity = 117;
    return res.json(genParticipants(participantsQuantity));
  },
};
