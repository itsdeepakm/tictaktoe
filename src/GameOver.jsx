export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>{winner}</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
