import React from "react";
import CardRemove from "../deleteCard";

var bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE2NTc4NjE2OTEsImlkIjoiY2wzc3F0a2Z5MDAwMGd3am5nODhiZHQzNCIsImVtYWlsIjoiZ2lub3Bhb2xpQGdpbWFpbC5naW5vIiwiaWF0IjoxNjU0MjYxNjkxfQ.mM-WK5Ytk_b5Jtx52gENRYw-Uxq3ETfZdm0DlVbSz5hJtp1Ym9VWCI8fMP0lQeuDDE8XvM55zZdU_ki76o7-b0zNhuAXZnzipj8HXzqn9R84Fzl-19ULHT0TrgtHWt5v61XUtLkXImVC46ILKrS8AoB33D2oVeRq1cd2iipyxcpHdI0tqCQzIrcP_Awt1TqBTxsuM9clg5oXvDaPclqKFckpgQh2LEGkJ2178SWiTPNXS1ei9LuKs6nd4A3ssg9RHL4tMWrwls2rd7HavVbalzlgfRhkP8Eh58IKj9NE8ZsouolDuUkdsxw04t6L4-vLXCcT05m5mHnT9uUl10eby6uDwaKq4DiPISZ8wQZumxQBIviJzxOTE4pRhuB6DqqeBlvQ0pdYc-baGXVrFf8P3ueDjwIFSwOg_YagUpnvWEpqh8O_BnvVBBIlDJCegNkjGY5a6ttZtSMlNWYEbs_DrA3qVp0BFliUJTkU5P0_oTWoWq7fGpKNvossuv37286X2eac0g9KWCBOkfy2k74JfoJIUCqkLk6g7FFdRjJYU3tDW010Gvf32JICLj4TuFJaRnPwlUJ2sCRhaHevD4Ert8mbLs3WUXF1ukBrrs1MSI2lqyVqoU3VPCojOzT6skCH_iCPUaLzcp4hL4Lxn08qtGRuaLcAiFywqcnBKnnsCGo"


class Card extends React.Component {
   render() {
      return (
         <div className="card">
            <div className="card-content">{this.props.bio}
               <div>{this.props.children}</div>
            </div>
            <CardRemove idCard={this.props.idCard} idDashboard={this.props.idDashboard} text={this.props.text}/>
         </div >
      )
   }
}
export default Card