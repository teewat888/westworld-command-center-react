import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

const WestworldMap = ({ areas }) => {
  return (
    <Segment id="map">
      {/* What should we render on the map? */}
      {areas.map((area) => (
        <Area key={area.id} name={area.name} />
      ))}
    </Segment>
  );
};

export default WestworldMap;
