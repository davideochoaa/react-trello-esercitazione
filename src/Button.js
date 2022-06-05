/*import React from "react";
import propTypes from "prop-types";

class Button extends React.Component {
  render() {
    const {type,onClickHandler,children} = this.props
    return (
      <button 
      type={type}
      className="add-card"
      onClick={onClickHandler}>
      {children}
      </button>
    );
  }
}

Button.propTypes = {
  onClickHandler : propTypes.func
}
*/
/*export default Button */

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputText from './Components/InputText';
import axios from "axios";

export default function FormDialog(id) {

  var bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE2NTc4NjE2OTEsImlkIjoiY2wzc3F0a2Z5MDAwMGd3am5nODhiZHQzNCIsImVtYWlsIjoiZ2lub3Bhb2xpQGdpbWFpbC5naW5vIiwiaWF0IjoxNjU0MjYxNjkxfQ.mM-WK5Ytk_b5Jtx52gENRYw-Uxq3ETfZdm0DlVbSz5hJtp1Ym9VWCI8fMP0lQeuDDE8XvM55zZdU_ki76o7-b0zNhuAXZnzipj8HXzqn9R84Fzl-19ULHT0TrgtHWt5v61XUtLkXImVC46ILKrS8AoB33D2oVeRq1cd2iipyxcpHdI0tqCQzIrcP_Awt1TqBTxsuM9clg5oXvDaPclqKFckpgQh2LEGkJ2178SWiTPNXS1ei9LuKs6nd4A3ssg9RHL4tMWrwls2rd7HavVbalzlgfRhkP8Eh58IKj9NE8ZsouolDuUkdsxw04t6L4-vLXCcT05m5mHnT9uUl10eby6uDwaKq4DiPISZ8wQZumxQBIviJzxOTE4pRhuB6DqqeBlvQ0pdYc-baGXVrFf8P3ueDjwIFSwOg_YagUpnvWEpqh8O_BnvVBBIlDJCegNkjGY5a6ttZtSMlNWYEbs_DrA3qVp0BFliUJTkU5P0_oTWoWq7fGpKNvossuv37286X2eac0g9KWCBOkfy2k74JfoJIUCqkLk6g7FFdRjJYU3tDW010Gvf32JICLj4TuFJaRnPwlUJ2sCRhaHevD4Ert8mbLs3WUXF1ukBrrs1MSI2lqyVqoU3VPCojOzT6skCH_iCPUaLzcp4hL4Lxn08qtGRuaLcAiFywqcnBKnnsCGo"
  const idDashboard = id.idDashboard;
  const [open, setOpen ] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createCard = () => {
    axios.post(`http://localhost:3333/api/${idDashboard}`, { text: "text" }, { headers: { 'Authorization': `Bearer ${bearerToken}` } })
    console.log("Carta Creata Correttamente");
  };

  var gino = "";
  const handleChange = (e) => {
    const text = e.target.value
    return gino=text
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      axios.post(`http://localhost:3333/api/${idDashboard}`, { text: gino }, { headers: { 'Authorization': `Bearer ${bearerToken}` } })
      console.log("Carta Creata Correttamente");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Card
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Card</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Create a New Card in this Dashboard please insert the new Card Name
          </DialogContentText>
          <InputText name={"text"} onChange={handleChange}>
          </InputText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onSubmitHandler}>ADD CARD</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}