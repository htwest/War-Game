import React, { useState } from "react";

import "./styles/App.css";
import getDecks from "./hooks/getDecks.js";

import PlayerDeck from "./comps/PlayerDeck";
import ComputerDeck from "./comps/ComputerDeck";

function App() {
  const { playerDeck, computerDeck } = getDecks();
  const [round, setRound] = useState(false);
  const [playerCardCount, setPlayerCardCount] = useState(
    playerDeck.cards.length
  );
  const [computerCardCount, setComputerCardCount] = useState(
    computerDeck.cards.length
  );

  const startGame = () => {
    setRound(!round);
  };

  return (
    <div className="App" onClick={startGame}>
      <div className="computer-deck deck">{computerCardCount}</div>
      {round ? <ComputerDeck cards={computerDeck.cards} /> : null}
      <div className="text">Hello There</div>
      <div className="player-deck deck">{playerCardCount}</div>
      {round ? <PlayerDeck cards={playerDeck.cards} /> : null}
    </div>
  );
}

export default App;
