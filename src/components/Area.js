import React from "react";
import "../stylesheets/Area.css";

const Area = ({ name }) => {
  const modifyName = () => {
    const titleWords = name.split("_");
    let result = titleWords.map(
      (titleWord) => titleWord.charAt(0).toUpperCase() + titleWord.slice(1)
    );
    return result.join(" ");
  };

  return (
    <div className="area" id={name}>
      <h3 className="labels">
        {modifyName()}
        {/* Don't just pass in the name from the data...clean that thing up */}
      </h3>

      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    </div>
  );
};

Area.propTypes = {
  hosts: function (props, propName, componentName) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
