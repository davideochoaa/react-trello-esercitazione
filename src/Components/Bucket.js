import { Component } from "react";
import Button from "../Button";
import Buttons from "./DropDownButton/index.js"

class Bucket extends Component {
  render() {
    return (
      <div className="bucket">
        <div className="bucket-header">
        <h2 className="bucket-title">{this.props.title}</h2>
        <Buttons idDashboard = {this.props.idDashboard} />
        </div>
        <div className="cards">
          {this.props.children}
        </div>
        <Button idDashboard={this.props.idDashboard} onClickHandler={() => console.log("add Card")}/>
      </div>
    );
  }
}
export default Bucket;
