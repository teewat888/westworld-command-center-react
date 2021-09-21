import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";

const HostList = ({ hosts }) => {
  return (
    <Card.Group itemsPerRow={6}>
      {/* What do you think, partner? */}
      {hosts.map((host) => (
        <Host key={host.id} imageUrl={host.imageUrl} />
      ))}
    </Card.Group>
  );
};

export default HostList;
