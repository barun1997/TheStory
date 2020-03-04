import React, { useEffect } from "react";
import "./App.css";
import lottie from "lottie-web";
import animationData from "./assets/party.json";
import Chapter1 from "./Pages/Chapter1";
import Chapter2 from "./Pages/Chapter2";
import Chapter3 from "./Pages/Chapter3";
import Chapter4 from "./Pages/Chapter4";
import Chapter6 from "./Pages/Chapter6";
import Chapter5 from "./Pages/Chapter5";
import Chapter7 from "./Pages/Chapter7";
import Chapter8 from "./Pages/Chapter8";
import Chapter9 from "./Pages/Chapter9";
import Chapter10 from "./Pages/Chapter10";
import Parent from "./Pages/Parent";
import { RenderComponent } from "./Pages/RenderComponent";

const data = [
  Parent,
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  handleNext = () => {
    const index = this.state.index;
    if (index < 10) {
      this.setState({
        index: index + 1
      });
    }
    console.log(this.state.index);
  };
  handlePrevious = () => {
    const index = this.state.index;
    if (index >= 1) {
      this.setState({
        index: index - 1
      });
    }
    console.log(this.state.index);
  };

  render() {
    var component = data[this.state.index];
    console.log(component);

    return (
      <div className="App">
        <RenderComponent component={component} />
        <button onClick={this.handlePrevious}> Click Previous </button>{" "}
        <button onClick={this.handleNext}> Click Next </button>
      </div>
    );
  }
}
export default App;
