import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/crowdswap.json";
import animationData2 from "../assets/bikeride.json";
import animationData3 from "../assets/grocery.json";
import animationData4 from "../assets/movie.json";
import animationData5 from "../assets/carride.json";
import animationData6 from "../assets/pizza.json";

let animObj = null;
let animObj2 = null;
let animObj3 = null;
let animObj4 = null;
let animObj5 = null;
let animObj6 = null;

class Chapter7 extends React.Component {
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
    animObj2 = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData2 // the path to the animation json
    });
    animObj3 = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData3 // the path to the animation json
    });
    animObj4 = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData4 // the path to the animation json
    });
    animObj5 = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData5 // the path to the animation json
    });
    animObj6 = lottie.loadAnimation({
      container: this.animBox, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData6 // the path to the animation json
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
        <h1 style={{ color: "blue" }}>
          {" "}
          Boo, so far, we have done these things together:{" "}
        </h1>
        {/* This is you wrapper where animation will load */}
        <div
          style={{ width: 400, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        ></div>
        <h2> Both straightforward and referential ;)</h2>
      </div>
    );
  }
}

export default Chapter7;
