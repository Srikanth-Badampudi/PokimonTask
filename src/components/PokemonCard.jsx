import React from "react";

const PokemonCard = ({ cardData, onPressModal }) => {
  return (
    <div
      class="card pointer"
      style={{ width: "12rem", height: "10rem", cursor: "pointer" }}
      onClick={() => onPressModal(cardData)}
    >
      <div class="card-body d-flex flex-column justify-content-center">
        <h5 class="card-title text-center">Pokemon</h5>
        <p class="card-text text-center mt-2">
          name:
          <br />
          {cardData.name}
          <br />
          {}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
