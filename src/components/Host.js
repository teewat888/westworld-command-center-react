import React from "react";
import "../stylesheets/Host.css";
import { Card } from "semantic-ui-react";

const Host = ({ imageUrl }) => {
  const isSelected = false;

  return (
    <Card
      className={isSelected ? "host selected" : "host"}
      onClick={/* On Click what? */ null}
      image={imageUrl}
      raised
      href="#"
    />
  );
};

export default Host;
