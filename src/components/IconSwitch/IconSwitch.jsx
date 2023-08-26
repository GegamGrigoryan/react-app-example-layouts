import React from "react";

export default function IconSwitch({ onSwitch, icon }) {
  return (
    <div className="icons-container" onClick={onSwitch}>
      <div className="material-icons">{icon}</div>
    </div>
  );
}
