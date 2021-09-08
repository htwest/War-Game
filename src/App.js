import React, { useState } from "react";

import "./styles/App.css";
import getDecks from "./hooks/getDecks.js";

import PlayerDeck from "./comps/PlayerDeck";
import ComputerDeck from "./comps/ComputerDeck";

function App() {
  const [round, setRound] = useState(false);

  const { playerDeck, computerDeck } = getDecks();

  const startGame = () => {
    setRound(true);
  };

  return (
    <div className="App" onClick={startGame}>
      <div className="computer-deck deck">{playerDeck.cards.length}</div>
      {round ? <ComputerDeck cards={computerDeck} /> : null}
      <div className="text">Hello There</div>
      <div className="player-deck deck">{computerDeck.cards.length}</div>
      {round ? <PlayerDeck cards={playerDeck} /> : null}
    </div>
  );
}

export default App;
