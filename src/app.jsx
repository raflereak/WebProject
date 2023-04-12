import React, { Component } from 'react';
import { useState } from 'react';
import Login from './components/login/login';
import Landing from './landingpage/landing';
import BossDashboard from './dashboard/dashboard';
import { Route, Routes } from "react-router-dom";
import Newaccount from './newaccount/newaccount';
import Accountbook from './accountbook/accountbook';
import Calendar from './calendar/calendar';
import Map from './map/map';
import Notice from './noticeboard/noticeboard';
import Today24 from './today24/today24';
import Checklist from './checklist/checklist';
import Profile from './profile/profile';
import Sidebar from './components/sidebar/sidebar';
import Boss from './boss/boss';
import Statistics from './statistics/statistics';
import ArbaDashboard from './Arba/arbadashboard/arbadashboard';
import ArbaSidebar from './Arba/arbasidebar/arbasidebar';
import ArbaCalendar from './Arba/arbacalender/arbacalender';
import ArbaMap from './Arba/arbamap/arbamap';
import ArbaNoticeboard from './Arba/arbanoticeboard/arbanoticeboard';
import ArbaProfile from './Arba/arbaprofile/arbaprofile';
import ArbaToday24 from './Arba/arbatoday24/arbatoday24';
import ArbaChecklist from './Arba/arbachecklist/arbachecklist';
import Arba from './Arba/arba';


function App() {

  const [user, setuser] = useState([])
  const [type, settype] = useState("")

  const onLogin = (user) => {
    setuser(user)
  }

  const onType = (type) => {
    settype(type)
    console.log(type)
  }
  
    return(
      <div className="App">
        <Routes>
          <Route path = "/home" element={<Landing/>}/>
          <Route path = "/login" element={<Login login={onLogin} type={onType}/>}/>
          <Route path = "/register" element={<Newaccount login={onLogin}/>}/>
          <Route path = "/boss/*" element={<Boss user={user}/>}>
            <Route path = "/boss/*" element={<Sidebar/>}/>
            <Route path = "dashboard" element={<BossDashboard />}/>
            <Route path = "calendar" element={<Calendar />}/>
            <Route path = "accountbook" element={<Accountbook />}/>
            <Route path = "statistics" element={<Statistics/>}/>
            <Route path = "map" element={<Map />}/>
            <Route path = "notice" element={<Notice />}/>
            <Route path = "today24" element={<Today24 />}/>
            <Route path = "checklist" element={<Checklist />}/>
            <Route path = "profile" element={<Profile />}/>
          </Route>
          <Route path = "/arba" element={<Arba />}>
            <Route path = "/arba" element={<ArbaSidebar/>}/>
            <Route path = "dashboard" element={<ArbaDashboard/>}/>
            <Route path = "calendar" element={<ArbaCalendar />}/>
            <Route path = "accountbook" element={<Accountbook />}/>
            <Route path = "map" element={<ArbaMap />}/>
            <Route path = "notice" element={<ArbaNoticeboard />}/>
            <Route path = "today24" element={<ArbaToday24 />}/>
            <Route path = "checklist" element={<ArbaChecklist />}/>
            <Route path = "profile" element={<ArbaProfile />}/>
          </Route>
          <Route path = "/" element={<Landing/>}/>
          </Routes>
          </div>
          
    );
  
    
}
/*
class App extends Component{
  render() {
    return(
      <Router>
      <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
          </li>
        <li>
          <Link to="/login">Login</Link>
          </li>
      </ul>
      </div>
      <div>
      <Route path = "/home" component={<Landing />}/>
      <Route path = "/login" component={<Login />}/>
      <Route path = "/" exact component={<Landing />}/>
      </div>
    </Router>
    )
  }
}*/
/*
class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/home">Landing</Link>
            </li>
          <li>
            <Link to="/login">Login</Link>
            </li>
        </ul>
        <Route path = "/home" component={Home}/>
        <Route path = "/login" component={Logincons}/>
        <Route path = "/" exact component={Home}/>
      </Router>
    );
  }
}*/

/*
class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path = "/" element={<Landing/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/main" element = {<Main/>}/>
          <Route path = "/announce" element={<Announce/>}/>
          <Route path = "/schedule" element={<Schedule/>}/>
          <Route path = "/pay" element={<Pay/>}/>
        </Routes>
    </div>);
  }
}*/

export default App;