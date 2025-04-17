import React from 'react';
import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom';
import TemporaryDrawer, { SideBar } from '../../Components/Sidebar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MainLayout from '../../Components/MainLayout';
 const DashboardPage = () => {
    
    return (
        <><MainLayout>
        <div className={styles.mainContainer}>
        
            <div className={styles.container}>
       <div className={styles.sectionCon}>
       <Link to={`/userManagement`} className={styles.section1}>
           <h3>Multi User Management</h3>
                  <p>Active - 10</p>
                  <p>In-Active  - 05</p>
       </Link>
       <div className={styles.section2}><h3>Participant Management</h3>
                    <p>Active - 10</p>
                    <p>In-Active  - 05</p>
       </div>
                   
       <div className={styles.section3}><h3>Player Management</h3>
                    <p>Active - 10</p>
                    <p>In-Active  - 05</p>
       </div>
                    
       </div>
    </div>
    </div>
    </MainLayout>
        </>
    );
};

export default DashboardPage