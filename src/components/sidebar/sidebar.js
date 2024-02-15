import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { SidebarData, SidebarData1 } from "./sidebarData";
import Menu from "./submenu";
import LogoutIcon from '@mui/icons-material/Logout';
import { getUserProfile } from "../../utility/ApiServices";
import { Box, Button, Modal } from "@mui/material";
import { Createbuttton } from "../context/context";

const SidebarNav = styled.nav`
  background: #0c5ca1;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: auto;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  let context = useContext(Createbuttton)
  const [sidebar, setSidebar] = useState(false);
  const [profiledata,setProfiledata] = useState();
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  // const showSidebar = () => setSidebar(!sidebar);
  const  userProfile =async()=>{
    let profile= await getUserProfile()
    setProfiledata(profile?.data?.data);
  }
  const Nolog = () => {
    setOpen(false);
  }
  const logOut = () => {
    setOpen(false);
    localStorage.removeItem("token");
    navigate("/")
  }
  useEffect(() =>{
    userProfile()
  },[])
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,    
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
// console.log(profiledata);
  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
      
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <img alt="" style={{borderRadius:"50%",width:"50%" ,alignItems:"center",marginLeft:"51px",marginTop:"58px"}} src="https://th.bing.com/th/id/OIP.K6h2xpD5PHcIP9clCdAm0wAAAA?pid=ImgDet&w=417&h=417&rs=1"/>
          <div style={{color:"whitesmoke",marginLeft:"40px",marginTop:"5px",fontWeight:"bold",display:"inline-block"}}>
            <p>Name:{profiledata?.name}</p>            
            <p style={{fontSize:'15px' ,marginLeft:'-11px'}}>Email:{profiledata?.email} </p>
          </div>
          <div style={{marginTop:"15px"}} >
            {context.isFaculty ? SidebarData.map((item, index) => {
              return( <>
              <Menu item={item} key={index} />              
              </>)
            })
         : SidebarData1.map((item, index) => {
          return( <>
          <Menu item={item} key={index} />              
          </>)
        }) }
          
          </div>
          {/* <div style={{marginTop:"15px"}}>
             {SidebarData.map((item, index) => {
              return( <>
              <Menu item={item} key={index} />              
              </>)
            })}
            </div>  */}
         <div className="sidebarNew">
  {/* Sidebar content */}
  <div className="sidebar-bottom">
    <div style={{ fontWeight: "bold",fontSize:"150%" }}>
      <p onClick={handleOpen} style={{color:"whitesmoke"}}>
        <LogoutIcon style={{color:"whitesmoke",fontSize:"140%"}}></LogoutIcon> Logout
    </p>
</div>
  </div>
</div>
<Modal
        open={open}
        // onClose={logOut}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500}}>
          <h3 id="parent-modal-title"> Do you want to Logout ..?</h3>
          {/* <p id="parent-modal-description">
           Do you want to Logout ..?
          </p> */}
          <div >

         <Button onClick={Nolog}  > No</Button>
         <Button onClick={logOut} > Yes</Button>
          </div>

        </Box>
      </Modal>

  </SidebarWrap>  
 </SidebarNav>
</IconContext.Provider>


    </>
  );
  
};

export default Sidebar;
