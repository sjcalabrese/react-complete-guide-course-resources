import { useState } from "react";
export default function Player({ initalName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initalName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //by using the ! it will set to the opposite of what it currently is
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    console.log(event);
    // event.target.value allows you to grab the value the user is entering
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
