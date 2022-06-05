import React from "react";
import Bucket from "./Bucket";

class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
// }
state = { cardName: "Inizio" };
  componentDidMount() {
    this.setState({ cardName: "La mia carta" });
    console.log("Sono montato1");
  }
  componentDidUpdate() {
    console.log("Sono aggiornato");
  }
  render() {
    console.log("Render");
    return (
      <div className="dashboard">
        <Bucket title={this.props.title} idDashboard={this.props.idDashboard}>
          {this.props.children}
        </Bucket>
      </div>
    );
  }
}
export default Dashboard;

/* 
<Bucket title={this.props.title}>
          {[1, 2, 3].map((el, index) => {
            return (
              <Card key={index} bio={el}>
                ciao
              </Card>
            );
          })}
        </Bucket>
        <Bucket title={"Doing"}>
          <Card />
          <Card>{this.state.cardName}</Card>
          <Card />
        </Bucket>
        <Bucket title={"Done"}>
          <Card />
          <Card />
          <Card />
        </Bucket>
*/