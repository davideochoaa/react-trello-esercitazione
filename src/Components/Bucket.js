import { Component } from "react";
import Card from "./Card";
import Button from "../Button";
import Buttons from "./Buttons/index.js"

class Bucket extends Component {
  render() {
    return (
      <div className="bucket">
        <div className="bucket-header">
        <h2 className="bucket-title">{this.props.title}</h2>
        <Buttons />
        </div>
        <div className="cards">
          {this.props.children}
        </div>
        <Button onClickHandler={() => console.log("add Card")}>
          ADD-CARD
        </Button>
      </div>
    );
  }
}
export default Bucket;
