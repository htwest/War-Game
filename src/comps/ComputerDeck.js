const ComputerDeck = ({ cards }) => {
  let currentCard = cards[0];
  let dataValue = `${currentCard.value} ${currentCard.suit}`;

  return (
    <div className="computer-card-slot card-slot">
      <div className="card black" data-value={dataValue}>
        {currentCard.suit}
      </div>
    </div>
  );
};

export default ComputerDeck;
