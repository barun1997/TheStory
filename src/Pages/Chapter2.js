import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/chapter2.json";

let animObj = null;

class Chapter2 extends React.Component {
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
        <h1>
          {" "}
          I don’t know. I just had to tell that thing right off. Just to make
          you laugh.{" "}
        </h1>

        <h2>
          Anyways, let’s step back to the first day itself. It was flight day,
          but just a few hours before that day, I sent a creepy instagram follow
          request to a girl who was allegedly mero chineko didi ko student.
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

export default Chapter2;
