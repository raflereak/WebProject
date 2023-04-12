import React, { Component } from 'react';
import styles from './arbadashboard.module.css';
import { Link } from 'react-router-dom'
import { Route, Routes, Router } from 'react-router';
import ArbaSidebar from '../arbasidebar/arbasidebar';
/*import Accountbook from '../accountbook/accountbook';
import Caledar from '../calender/calender';
import Map from '../map/map';
import Notice from '../noticeboard/noticeboard';
import Today24 from '../today24/today24';
import Checklist from '../checklist/checklist';
import Profile from '../profile/profile'; */

class ArbaDashboard extends Component{
  render(){
    return(
      <>
        <div className={styles.whiteboard}>
          <div>test</div>
        </div>
      <div>
      </div>
      </>
    )
  }
  
}

export default ArbaDashboard;

/*

        <Routes>
        <Route path = "/" component={<Dashboard />}/>
        <Route path = "/calender" component={<Caledar />}/>
        <Route path = "/calender" component={<Caledar />}/>
        <Route path = "/accountbook" component={<Accountbook />}/>
        <Route path = "/map" component={<Map />}/>
        <Route path = "/notice" component={<Notice />}/>
        <Route path = "/today24" component={<Today24 />}/>
        <Route path = "/checklist" component={<Checklist />}/>
        <Route path = "/profile" component={<Profile />}/>
        </Routes>
*/