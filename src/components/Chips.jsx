import React from "react";

const Chips = (props) => {
  return (
    <>
      <span
        style={{
          fontSize: ".8rem",
          backgroundColor: "grey",
          padding: ".5rem",
          borderRadius: "1rem",
          marginRight: ".5rem",
        }}
      >
        {props.chip}
      </span>
    </>
  );
};

export default Chips;
