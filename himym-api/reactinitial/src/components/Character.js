import React, { useState } from "react";

export default function Character({ characterName }) {
  const [showDetails, setShowDetails] = useState(false);
  const [buttonText, setButtonText] = useState("Show More");

  const handleClick = (event) => {
    setShowDetails((current) => !current);
  };

  const handleButtonTextChange = () => {
    setButtonText("Show Less");
  };

  return characterName.map((character) => (
    <>
      <p key={character.name}>{character.name}</p>
      <button
        onClick={() => {
          handleClick();
          handleButtonTextChange();
        }}
      >
        {buttonText}
      </button>
      {showDetails && (
        <div>
          <p>{character.details}</p>
        </div>
      )}
    </>
  ));
}
