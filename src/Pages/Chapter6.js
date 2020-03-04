import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/chapter6.json";

let animObj = null;

class Chapter6 extends React.Component {
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
        <h2>
          I wasn't going to stay at Australia forever though. It was time for me
          to arrive to Nepal! She had a party that day. Anniversary tym. "I look
          fabulous", she said, "I am drunk", she added. I pounced. I wanted a
          fairytale start, so the first thing I did after I landed was to tell
          my friend Sedhain, and head for the party place and what happened
          next? I got nervous. Lol.
        </h2>
        {/* This is you wrapper where animation will load */}
        <div
          style={{ width: 400, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        ></div>
        <h2> AND I GOT A KISS! In the cheeks though. </h2>
      </div>
    );
  }
}

export default Chapter6;
