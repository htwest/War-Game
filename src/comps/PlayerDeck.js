const PlayerDeck = ({ cards }) => {
  let currentCard = cards[0];
  let dataValue = `${currentCard.value} ${currentCard.suit}`;
  cards.splice(0, 1);
  console.log(cards);

  return (
    <div className="player-card-slot card-slot">
      <div className="card red" data-value={dataValue}>
        {currentCard.suit}
      </div>
    </div>
  );
};

export default PlayerDeck;
