import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from '../Auth/Login';
import DashboardPage from '../Pages/DashBoard/Dashboard';
import MultiUserPage from '../Pages/MultiUser/MultiUserPage';
import UserManagement from '../Pages/UserManagememt/UserManagement';
import DepartmentManagement from '../Pages/DepartmentManagement/DepartmentManagement';
import ReferralManagement from '../Pages/ReferralManagement/ReferralManagement';
const RoutesPage = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' Component={LoginPage} />
      <Route path='/dashboard' Component={DashboardPage}/>
      <Route path='multi-user' Component={MultiUserPage}/>
      <Route path='userManagement' Component={UserManagement}/>
      <Route path='departmentManagement' Component={DepartmentManagement}/>
      <Route path='referral' Component={ReferralManagement}/>
      </Routes>
      </Router>
  )
}

export default RoutesPage
