import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/chapter5.json";

let animObj = null;

class Chapter5 extends React.Component {
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
          {" "}
          One thing let to the other, and we were now all over our social
          medias. Snap, Insta, you name it. I was kind of worried because I
          can't still get to her FB for some reason. :/ But anyways, I begun
          knowing a thing or two about this girl through hours of non-sleeping
          video calls. But I was seven seas away (or is it just two?); we
          couldn't meet. But, we're practically meeting everyday through our
          non-ending calls (sometimes it felt like forever honestly LOL).{" "}
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

export default Chapter5;
