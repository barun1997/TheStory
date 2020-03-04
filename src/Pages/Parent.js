import React from "react";
import lottie from "lottie-web";
import animationData from "../assets/party.json";

let animObj = null;

export default class Parent extends React.Component {
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
  render() {
    return (
      <div className="App">
        <h1>I figured out this is the most fitting way to tell our story.</h1>
        <h2> First, Lets make this a little about me. </h2>
        <h2>So I was in Australia, embracing my unusual lifestyle </h2>
        <p style={{ textAlign: "center" }}>
          {" "}
          I was never a party guy, but this time, man, I went to clubs. But,
          still, it just didn't feel right. Everyone around me danced
          nonchalantly, with rhythym. They felt lively, but, there was I, in a
          corner, and it all felt too distorted. I wanted an escape, yet, I'd
          rather be there on a Sunday night than be alone at my room. After all,
          I had gone to Australia to enjoy.
        </p>{" "}
        {/* This is you wrapper where animation will load */}
        <div
          style={{ width: 400, margin: "0 auto" }}
          ref={ref => (this.animBox = ref)}
        ></div>
      </div>
    );
  }
}
