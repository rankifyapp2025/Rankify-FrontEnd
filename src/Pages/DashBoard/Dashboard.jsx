import React from 'react';
import styles from './Dashboard.module.scss'
import { Link } from 'react-router-dom';
 const DashboardPage = () => {
    
    return (
        <>
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
        </>
    );
};

export default DashboardPage