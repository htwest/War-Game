import "./styles/App.css";
import Deck from "./hooks/deck.js";

function App() {
  const deck = new Deck();
  deck.shuffle();
  console.log(deck.cards);

  return (
    <div className="App">
      <div className="computer-deck deck">26</div>
      <div className="computer-card-slot card-slot"></div>
      <div className="text">Hello There</div>
      <div className="player-deck deck">26</div>
      <div className="player-card-slot card-slot"></div>
    </div>
  );
}

export default App;
