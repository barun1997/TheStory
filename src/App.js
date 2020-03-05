import React, { useEffect } from "react";
import { Popover, Button, Card } from "antd";
import "./App.css";
import "antd/dist/antd.css";
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
import Chapter11 from "./Pages/Chapter11";
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
  Chapter10,
  Chapter11
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      visible: false
    };
  }

  handleNext = () => {
    const index = this.state.index;
    if (index < 11) {
      this.setState({
        index: index + 1
      });
    }
    if (index === 11) {
      this.setState({
        visible: true
      });
    }
    console.log(this.state.visible);
    console.log(this.state.index);
  };
  hide = () => {
    this.setState({
      visible: false
    });
  };

  handlePrevious = () => {
    const index = this.state.index;
    if (index >= 1) {
      this.setState({
        index: index - 1
      });
    }
    if (index === 0) {
      this.setState({
        visible: true
      });
    }
    console.log(this.state.index);
  };

  render() {
    var component = data[this.state.index];
    console.log(component);

    return (
      <div className="App">
        <Card bordered={true}>
          <RenderComponent component={component} />
        </Card>
        <Button danger type="primary" onClick={this.handlePrevious}>
          {" "}
          Click Previous{" "}
        </Button>{" "}
        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="This is the end of the story, idiot!"
          trigger="click"
          visible={this.state.visible}
        >
          <Button type="primary" onClick={this.handleNext}>
            {" "}
            Click Next{" "}
          </Button>
        </Popover>
      </div>
    );
  }
}
export default App;
