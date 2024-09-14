import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from '../src/navbar/NavBar';
import Index from '../src/Client/Index';
import ClientStats from '../src/Client/ClientStats';
import ClientNew from '../src/Client/ClientNew';
import CalenderIndex from './Calendar/CalendarIndex';
import EmployeeIndex from '../src/Employee/EmployeeIndex';
import EmployeeNew from './Employee/EmployeeNew';
import Store from './Store/Store';
import StoreMake from './Store/StoreMake';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp'
import Email from './Email/Email'
import Settings from './Email/Settings'
import Service from './Service/Service'
import ServiceCreate from './Service/ServiceCreate'
import Job from './Job/Job'
import JobCreate from './Job/JobCreate'

function Client() {
  return (
    <>
      <ClientStats />
      <Index />
    </>
  );
}

function AppContent() {
  const location = useLocation();
 
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup'; 

  return (
    <>
      {isLoginPage || isSignUpPage ? ( 
        <>
          <Routes>
            <Route path="/" element={<Client />} />
            <Route path="/ClientNew" element={<ClientNew />} />
            <Route path="/Calendar" element={<CalenderIndex />} />
            <Route path="/EmployeeIndex" element={<EmployeeIndex />} />
            <Route path="/EmployeeNew" element={<EmployeeNew />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/StoreMake" element={<StoreMake />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Email" element={<Email />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/ServiceCreate" element={<ServiceCreate />} />
            <Route path="/Job" element={<Job />} />
            <Route path="/JobCreate" element={<JobCreate />} />
          </Routes>
        </>
      ) : (
        <>
          <div className="w-80 lg:w-60 bg-gray-200 sticky top-0 h-screen overflow-y-auto">
            <NavBar />
          </div>
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Client />} />
              <Route path="/ClientNew" element={<ClientNew />} />
              <Route path="/Calendar" element={<CalenderIndex />} />
              <Route path="/EmployeeIndex" element={<EmployeeIndex />} />
              <Route path="/EmployeeNew" element={<EmployeeNew />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/StoreMake" element={<StoreMake />} />
              <Route path="/Login"  element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Email" element={<Email />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/ServiceCreate" element={<ServiceCreate />} />
              <Route path="/Job" element={<Job />} />
              <Route path="/JobCreate" element={<JobCreate />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex">
        <AppContent />
      </div>
    </Router>
  );
}
