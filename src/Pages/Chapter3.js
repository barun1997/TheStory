import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/chapter3.json";

let animObj = null;

class Chapter3 extends React.Component {
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
        <h1> This is how I like to tell the story aajkal. </h1>

        <h2>
          {" "}
          Days went by, and I did a FBI search on the girl (Lol, maybe I
          didn't). But one day, she posts about her brothers and how the younger
          ones always get an advantage. Young I am, I knew it was my forte. I
          pounced on, and I dmd, “I can relate”. I had two sisters after all.
          What's the use of being born a decade later than all your siblings if
          you can't seize moments like these?{" "}
        </h2>
        {/* This is you wrapper where animation will load */}
        <div
          style={{ width: 400, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        ></div>
      </div>
    );
  }
}

export default Chapter3;
