import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GroupSection() {
  const [participants, setParticipants] = useState([]);
  const [groups, setGroups] = useState([]);

  const groupQtty = 4;

  useEffect(() => {
    async function loadParticipants() {
      const response = await axios.get("http://localhost:3333/participants");

      setParticipants(response.data);
    }

    loadParticipants();
  }, []);

  useEffect(() => {
    setGroups(divideParticipantsInGroups(participants, groupQtty));
  }, [participants]);

  function divideParticipantsInGroups(participants, groupQtty) {
    const groups = [];
    let groupAlreadyPicked = [];

    for (let i = 0; i < groupQtty; i++) {
      groups.push([]);
    }

    participants.map((participant) => {
      if (groupAlreadyPicked.length === groups.length) groupAlreadyPicked = [];
      let groupIndex = 0;
      while (true) {
        groupIndex = Math.floor(Math.random() * groupQtty);

        if (!groupAlreadyPicked.includes(groupIndex)) break;
      }
      groups[groupIndex].push(participant);
      groupAlreadyPicked.push(groupIndex);
    });
    return groups;
  }

  return (
    <>
      <h1>Participants quantity: {participants.length}</h1>
      <h2>Groups quantity: {groups.length}</h2>
      <div className="container">
        {groups.map((group, i) => (
          <div className="groupDiv" key={i}>
            <h4>Group: {i + 1}</h4>
            {group.map((participant) => (
              <span key={participant.id}>{participant.name}</span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
