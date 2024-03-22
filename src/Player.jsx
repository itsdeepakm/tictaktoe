import { useState } from "react";

function Player({ name, symbol }) {
  const [player, setplayer] = useState(name);
  const [state, setstate] = useState(false);
  function handleEdit() {
    setstate(state ? false : true);
  }
  function handlechange(event) {
    setplayer(event.target.value);
  }
  let playername = <span className="player-name">{player}</span>;

  if (state) {
    playername = (
      <input type="text" required value={player} onChange={handlechange} />
    );
  }
  return (
    <>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{state ? "save" : "edit"}</button>
    </>
  );
}
export default Player;
