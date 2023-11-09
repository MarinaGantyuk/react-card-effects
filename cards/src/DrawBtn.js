export default function DrawBtn({ draw, isShuffling, deck }) {
  if (!deck) return null;

  return (
    <button className="Deck-gimme" onClick={draw} disabled={isShuffling}>
      DRAW
    </button>
  );
}
