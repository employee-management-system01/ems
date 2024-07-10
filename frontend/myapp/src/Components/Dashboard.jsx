import React, { useContext} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline'; 
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import {  Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context/MyContext';
import AdminProfile from './AdminProfile';



// import Login2 from '../Components/Login2';




const drawerWidth = 240;

function Dashboard() {




  const navigate = useNavigate(); 

  // const apiData =  useContext(Context)
  const apiData =  useContext(Context)
  console.log(apiData.email);
  // const obj = {
  //   email : apiData.email
  // }
// console.log(obj);
 
  axios.defaults.withCredentials=true;
  // logout
  const handleLogout = async () => {
    try {
      // Wait for the patch request to complete
      await axios.patch(`http://localhost:6060/api/check_out/${apiData.email}`);
  
      // Proceed with the logout process
      const res = await axios.get('http://localhost:6060/logout');
  
      if (res.data.message === "Success") {
        // Ensure apiData is defined and contains email before using it
        navigate('/');
        window.location.reload()
      } else {
        console.log(res.data);
      }
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };
  
  

  return (
    <Box sx={{ display: 'flex',  }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar style={{justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Employee management system
          </Typography>
          <Typography>
           <AdminProfile/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' , }}>
          <List>
            {/* <Link to='/dashboard/home'> */}
            {['Dashboard'].map((text) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard")}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    <AddHomeWorkRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                
              </ListItem>
            ))}
            {/* </Link> */}
          </List>
          <List>
            {/* <Link to='/dashboard/employees'> */}
            {['Employees management'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard/emptable")}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    <ManageAccountsSharpIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                
              </ListItem>
            ))}
            {/* </Link> */}
          </List>
          <List>
            {/* <Link to= '/dashboard/department'> */}
            {['Role'].map((text,) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard/deptTable")}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    <BusinessCenterIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                
              </ListItem>
            ))}
            {/* </Link> */}
          </List>
          <List>
            {/* <Link to= '/dashboard/attenance'> */}
            {['Attendance'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard/attendance")}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    < AccessibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                
              </ListItem>
            ))}
            {/* </Link> */}
          </List>
          <List>
            {/* <Link to= '/dashboaerd/salary'> */}
            {['Leaves'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard/profile")}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                
              </ListItem>
            ))}
            {/* </Link> */}
          </List>
          <List>
          {/* <Link to='/dashboard/logout'> */}
            {['Logout'].map((text, index) => (
              <ListItem key={text} disablePadding onClick={()=>{handleLogout()}} >
               
                <ListItemButton>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
          {/* </Link> */}
          </List>
          <Divider />
         
        </Box>
      </Drawer>
      <Box component="main"   sx={{ flexGrow: 1, p: 3 , backgroundColor:'#f9f9f9',}}>
          <Toolbar />
            
         
          <Outlet/>
        
      </Box>
    </Box>
  )
}

export default Dashboard;