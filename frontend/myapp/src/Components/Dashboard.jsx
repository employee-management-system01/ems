import React from 'react'
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

import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

import {  Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



// import Login2 from '../Components/Login2';




const drawerWidth = 240;

function Dashboard() {
  const navigate = useNavigate(); 
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Employee management system
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
        <Box sx={{ overflow: 'auto' ,backgroundColor:'#  CDF5FD' }}>
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
                    <AddHomeWorkIcon />
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
            {['Profile'].map((text, index) => (
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
              <ListItem key={text} disablePadding onClick={()=>{navigate("/dashboard/logout")}} >
               
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
      <Box component="main"   sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet/>
        

        
       {/* <Graph/> */}
        
      </Box>
    </Box>
  )
}

export default Dashboard;