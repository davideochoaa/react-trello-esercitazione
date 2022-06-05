import React from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
//import { httpGetDashboard } from "./Components/api.http";
import axios from "axios";
import Card from "./Components/Card";
import PersonRemove from "./deleteCard";

var bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE2NTc4NjE2OTEsImlkIjoiY2wzc3F0a2Z5MDAwMGd3am5nODhiZHQzNCIsImVtYWlsIjoiZ2lub3Bhb2xpQGdpbWFpbC5naW5vIiwiaWF0IjoxNjU0MjYxNjkxfQ.mM-WK5Ytk_b5Jtx52gENRYw-Uxq3ETfZdm0DlVbSz5hJtp1Ym9VWCI8fMP0lQeuDDE8XvM55zZdU_ki76o7-b0zNhuAXZnzipj8HXzqn9R84Fzl-19ULHT0TrgtHWt5v61XUtLkXImVC46ILKrS8AoB33D2oVeRq1cd2iipyxcpHdI0tqCQzIrcP_Awt1TqBTxsuM9clg5oXvDaPclqKFckpgQh2LEGkJ2178SWiTPNXS1ei9LuKs6nd4A3ssg9RHL4tMWrwls2rd7HavVbalzlgfRhkP8Eh58IKj9NE8ZsouolDuUkdsxw04t6L4-vLXCcT05m5mHnT9uUl10eby6uDwaKq4DiPISZ8wQZumxQBIviJzxOTE4pRhuB6DqqeBlvQ0pdYc-baGXVrFf8P3ueDjwIFSwOg_YagUpnvWEpqh8O_BnvVBBIlDJCegNkjGY5a6ttZtSMlNWYEbs_DrA3qVp0BFliUJTkU5P0_oTWoWq7fGpKNvossuv37286X2eac0g9KWCBOkfy2k74JfoJIUCqkLk6g7FFdRjJYU3tDW010Gvf32JICLj4TuFJaRnPwlUJ2sCRhaHevD4Ert8mbLs3WUXF1ukBrrs1MSI2lqyVqoU3VPCojOzT6skCH_iCPUaLzcp4hL4Lxn08qtGRuaLcAiFywqcnBKnnsCGo"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      dashboard: [],
      Cards: []
    })
  }
    componentDidMount() {
      axios.get("http://localhost:3333/api/list"
        , { headers: { 'Authorization': `Bearer ${bearerToken}` }})
        .then(( response ) => {
          const dashboard = response.data;
          const cards = dashboard.components
          console.log(dashboard)
          this.setState({
            dashboard,
            cards
          });

        }).catch((err)=> {});
      //this.setState({ cardName: "La mia carta" });
      //console.log("Sono montato1");
    };

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
      return (
        <div className="dashboard">
        {
            this.state.dashboard.map(dashboard =>
          <Dashboard title={dashboard.name} key={dashboard.id} idDashboard={dashboard.id}>
            {
            dashboard.contents.map(contents => 
            <Card idCard = {contents.id} idDashboard ={dashboard.id} key={contents.id} text= {contents.text}>{contents.text}
            </Card>
            )}
          </Dashboard>
        )
        }
        </div>
      );
    };
  };
export default App;
