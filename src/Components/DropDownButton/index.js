import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";

var bearerToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE2NTc4NjE2OTEsImlkIjoiY2wzc3F0a2Z5MDAwMGd3am5nODhiZHQzNCIsImVtYWlsIjoiZ2lub3Bhb2xpQGdpbWFpbC5naW5vIiwiaWF0IjoxNjU0MjYxNjkxfQ.mM-WK5Ytk_b5Jtx52gENRYw-Uxq3ETfZdm0DlVbSz5hJtp1Ym9VWCI8fMP0lQeuDDE8XvM55zZdU_ki76o7-b0zNhuAXZnzipj8HXzqn9R84Fzl-19ULHT0TrgtHWt5v61XUtLkXImVC46ILKrS8AoB33D2oVeRq1cd2iipyxcpHdI0tqCQzIrcP_Awt1TqBTxsuM9clg5oXvDaPclqKFckpgQh2LEGkJ2178SWiTPNXS1ei9LuKs6nd4A3ssg9RHL4tMWrwls2rd7HavVbalzlgfRhkP8Eh58IKj9NE8ZsouolDuUkdsxw04t6L4-vLXCcT05m5mHnT9uUl10eby6uDwaKq4DiPISZ8wQZumxQBIviJzxOTE4pRhuB6DqqeBlvQ0pdYc-baGXVrFf8P3ueDjwIFSwOg_YagUpnvWEpqh8O_BnvVBBIlDJCegNkjGY5a6ttZtSMlNWYEbs_DrA3qVp0BFliUJTkU5P0_oTWoWq7fGpKNvossuv37286X2eac0g9KWCBOkfy2k74JfoJIUCqkLk6g7FFdRjJYU3tDW010Gvf32JICLj4TuFJaRnPwlUJ2sCRhaHevD4Ert8mbLs3WUXF1ukBrrs1MSI2lqyVqoU3VPCojOzT6skCH_iCPUaLzcp4hL4Lxn08qtGRuaLcAiFywqcnBKnnsCGo"

export default function BasicMenu(id) {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const idDashboard = id.idDashboard;
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   const addCard = () => {
      axios.post(`http://localhost:3333/api/${idDashboard}`, { text: "text" }, { headers: { 'Authorization': `Bearer ${bearerToken}` } })
      console.log("Card Aggiunta Correttamente");
   }

   return (
      <div>
         <Button
            id="bucket-button-change"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            <i className="fa-solid fa-ellipsis"></i>
         </Button>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem onClick={handleClose}>Delete Bucket</MenuItem>
            <MenuItem onClick={handleClose}>Change Name</MenuItem>
            <MenuItem onClick={addCard}>Add Card</MenuItem>
         </Menu>
      </div>
   );
}