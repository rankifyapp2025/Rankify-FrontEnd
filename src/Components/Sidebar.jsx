import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

export function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div style={{ height: '90vh', marginLeft: '1vw', marginTop: '2vw', padding: 10, boxShadow: '1px 2px 5px 3px rgba(12, 2, 2, 0.08)', backgroundColor: '#121212' }}>
      <Box sx={{ width: 300 }} role="presentation">
        <List>
          {['Dashboard', 'Department Management', 'Referral Management', 'Another Option'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton 
                onClick={() => navigate(
                  text === 'Dashboard' ? '/dashboard' : 
                  text === 'Department Management' ? '/departmentManagement' : 
                  text === 'Referral Management' ? '/referral' : '#'
                )}
                sx={{
                  fontSize: 17,
                  fontWeight: 600,
                  color: '#00E5FF',
                  '&:hover': {
                    backgroundColor: '#1E88E5', // Change this to your desired hover color
                    color: '#ffffff',
                  }
                }}
              >
                <ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ backgroundColor: '#00E5FF', color: '#121212', fontWeight: 'bold' }}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export function SideBar() {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100vh', marginLeft: '1vw', marginTop: '1vw', padding: 10, boxShadow: '1px 2px 5px 3px rgba(12, 2, 2, 0.08)', backgroundColor: '#0f172a' }}>
      <Box sx={{ width: 300 }} role="presentation">
        <List>
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => navigate('/dashboard')} 
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: '#38fcd3',
                '&:hover': {
                  backgroundColor: '#1E88E5', // Change this to your desired hover color
                  color: '#ffffff',
                }
              }}
            >
              <ListItemIcon>
                <ListItemText style={{color:"#38fcd3"}} primary="Dashboard" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => navigate('/departmentManagement')} 
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: '#38fcd3',
                '&:hover': {
                  backgroundColor: '#1E88E5',
                  color: '#ffffff',
                }
              }}
            >
              <ListItemIcon>
                <ListItemText style={{color:"#38fcd3"}} primary="Department Management" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              onClick={() => navigate('/referral')} 
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: '#38fcd3',
                '&:hover': {
                  backgroundColor: '#1E88E5',
                  color: '#ffffff',
                }
              }}
            >
              <ListItemIcon>
                <ListItemText style={{color:"#38fcd3"}} primary="Referral Management" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
             onClick={() => navigate('/multi-user')}
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: '#38fcd3',
                '&:hover': {
                  backgroundColor: '#1E88E5',
                  color: '#ffffff',
                }
              }}
            >
              <ListItemIcon>
                <ListItemText style={{color:"#38fcd3"}} primary="Multi User" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
             onClick={() => navigate('/userManagement')}
              sx={{
                fontSize: 17,
                fontWeight: 600,
                color: '#38fcd3',
                '&:hover': {
                  backgroundColor: '#1E88E5',
                  color: '#ffffff',
                }
              }}
            >
              <ListItemIcon>
                <ListItemText style={{color:"#38fcd3"}} primary="User Management" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}