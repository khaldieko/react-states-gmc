import "./App.css";

import React from "react";

class App extends React.Component {
  state = {
    person: {
      fullName: "",
      bio: "",
      profession: "",
      imgSrc: "",
    },
    showState: false,
  };
  kingsMen = () => {
    this.setState({
      person: {
        fullName: "Akinwole Dieko",
        bio: "good guy",
        profession: "web dev",
        imgSrc: "react header.png",
      },
      showState: !this.state.showState,
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.showState && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <h2>{this.state.person.bio}</h2>
            <h3>{this.state.person.profession}</h3>
            <img src={this.state.person.imgSrc} alt="" />
          </div>
        )}

        <button onClick={this.kingsMen}></button>
      </div>
    );
  }
}

export default App;
