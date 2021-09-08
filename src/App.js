import "./styles/App.css";
import Deck from "./hooks/deck.js";

function App() {
  const deck = new Deck();
  console.log(deck.cards);

  return (
    <div className="App">
      <h1>Hello There</h1>
    </div>
  );
}

export default App;
