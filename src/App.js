import React, { Component } from "react";
import "./App.css";
import Resource from "./components/Resource";
import resources from "./mock/resources";

class App extends Component {
 

  renderPosts = () => {
    const display = resources.map((resource) => {
      return <Resource resource={resource} />;
    });

    return display;
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">Welcome to BrainHive!</h1>
        </div>
        <div className="resourceList">{this.renderPosts()}</div>
      </div>
    );
  }
}

export default App;
