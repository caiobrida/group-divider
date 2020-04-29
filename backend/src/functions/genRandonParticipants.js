function genParticipants(quantity) {
  let participants = [];

  for (let i = 1; i <= quantity; i++) {
    const participant = {
      id: i,
      name: `participant${i}`,
    };

    participants.push(participant);
  }

  return participants;
}

module.exports = genParticipants;
