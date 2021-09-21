import React from "react";
import { Segment } from "semantic-ui-react";

import HostList from "./HostList";

const ColdStorage = ({ hosts }) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
      <HostList hosts={hosts} />
      {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}
    </Segment>
  </Segment.Group>
);

export default ColdStorage;
