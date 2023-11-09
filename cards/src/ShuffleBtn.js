export default function ShuffleBtn({ startShuffling, isShuffling, deck }) {
  if (!deck) return null;
  return (
    <button
      className="Deck-gimme"
      onClick={startShuffling}
      disabled={isShuffling}
    >
      SHUFFLE DECK
    </button>
  );
}
