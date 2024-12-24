import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import {
  BsFillHouseDoorFill, BsCalendarCheck, BsPersonFill, BsFillGearFill, BsFillBarChartFill,
  BsSearch, BsJustify, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle
} from 'react-icons/bs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import Bookings from './Bookings';
import Tenants from './Tenants';
import Requests from './Requests';
import Reports from './Reports';
import './dashboard.css';
import logo from './assets/La Villa.png';
import fontPath from './assets/CinzelDecorative-Regular.ttf';

function Header({ toggleSidebar }) {
  return (
    <header className='header'>
      <div className='header-left'>
        <div className='menu-icon' onClick={toggleSidebar}>
          <BsJustify className='icon' />
        </div>
        <div className='sidebar-brand'>
          <img src={logo} alt="La Villa Logo" className='sidebar-logo' />
          <span className='brand-text'>La Villa</span>
        </div>
      </div>
      <div className='header-right'>
        <BsSearch className='icon' />
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

function Sidebar({ isOpen }) {
  return (
    <aside id="sidebar" className={isOpen ? "" : "sidebar-hidden"}>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard">
            <BsFillHouseDoorFill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/bookings">
            <BsCalendarCheck className='icon' /> Bookings
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/tenants">
            <BsPersonFill className='icon' /> Tenants
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/requests">
            <BsFillGearFill className='icon' /> Requests
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard/reports">
            <BsFillBarChartFill className='icon' /> Reports
          </Link>
        </li>
      </ul>
    </aside>
  );
}

function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const fontFace = `
      @font-face {
        font-family: 'MyCustomFont';
        src: url('${fontPath}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
    styleSheet.insertRule(fontFace, styleSheet.cssRules.length);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const data = [
    { name: 'Jan', bookings: 20, revenue: 3000 },
    { name: 'Feb', bookings: 25, revenue: 3500 },
    { name: 'Mar', bookings: 30, revenue: 4000 },
    { name: 'Apr', bookings: 20, revenue: 3000 },
    { name: 'May', bookings: 28, revenue: 3600 },
    { name: 'Jun', bookings: 35, revenue: 4500 },
  ];

  return (
    <div className='grid-container'>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} />
      <div className='main'>
        <Routes>
          <Route path="/" element={
            <main className='main-container'>
              <div className='main-title'>
                <h3>DASHBOARD</h3>
              </div>

              <div className='main-cards'>
                <div className='card'>
                  <div className='card-inner'>
                    <h3>Total Rooms</h3>
                    <BsFillHouseDoorFill className='card_icon' />
                  </div>
                  <h1>50</h1>
                </div>
                <div className='card'>
                  <div className='card-inner'>
                    <h3>Occupied</h3>
                    <BsCalendarCheck className='card_icon' />
                  </div>
                  <h1>20</h1>
                </div>
                <div className='card'>
                  <div className='card-inner'>
                    <h3>Available</h3>
                    <BsPersonFill className='card_icon' />
                  </div>
                  <h1>30</h1>
                </div>
                <div className='card'>
                  <div className='card-inner'>
                    <h3>Pending Requests</h3>
                    <BsFillGearFill className='card_icon' />
                  </div>
                  <h1>8</h1>
                </div>
              </div>

              <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>npm

                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="bookings" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </main>
          } />
          <Route path="bookings" element={<Bookings />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="requests" element={<Requests />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
