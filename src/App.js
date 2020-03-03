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

let animObj = null;

class App extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");

    //call the loadAnimation to start the animation
    animObj = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData // the path to the animation json
    });
  }
  handleStop = () => {
    animObj.stop();
  };
  handlePlay() {
    animObj.play();
  }
  render() {
    return (
      <div className="App">
        <h2>I figured out this is the most fitting way to tell our story.</h2>
        <h2>So I was in Australia, embracing my unusual </h2>{" "}
        <h3> life style. </h3>
        <p>
          {" "}
          I was never a party guy, but this time, man, I went to clubs.
        </p>{" "}
        <h4> Let's make this a little about me.</h4>
        {/* This is you wrapper where animation will load */}
        <div
          style={{ width: 400, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        ></div>
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <Chapter7 />
        <Chapter8 />
        <Chapter9 />
        <Chapter10 />
      </div>
    );
  }
}

export default App;
