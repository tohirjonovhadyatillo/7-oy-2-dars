import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayer, removePlayer, updateScore } from './playersSlice';

const PlayersList = () => {
  const [playerName, setPlayerName] = useState('');
  const [score, setScore] = useState(0);
  const players = useSelector(state => state.players);
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    if (playerName) {
      dispatch(addPlayer({ id: Date.now(), name: playerName, score }));
      setPlayerName('');
      setScore(0);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Player Name"
      />
      <input
        type="number"
        value={score}
        onChange={(e) => setScore(Number(e.target.value))}
        placeholder="Score"
      />
      <button onClick={handleAddPlayer}>Add Player</button>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} - {player.score}
            <button onClick={() => dispatch(updateScore({ id: player.id, score: player.score + 1 }))}>+</button>
            <button onClick={() => dispatch(removePlayer({ id: player.id }))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersList;
