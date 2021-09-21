import React, { Component } from "react";
import "./stylesheets/App.css";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./components/WestworldMap";
import Headquarters from "./components/Headquarters";

class App extends Component {
  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.
  constructor(props) {
    super(props);
    this.state = {
      hosts: [],
      areas: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/hosts")
      .then((resp) => resp.json())
      .then((hosts) => {
        this.setState({
          hosts: hosts,
        });
      })
      .catch((e) => console.log(e));

    fetch("http://localhost:4000/areas")
      .then((resp) => resp.json())
      .then((areas) => {
        this.setState({
          areas: areas,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <Segment id="app">
        {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} />
      </Segment>
    );
  }
}

export default App;
