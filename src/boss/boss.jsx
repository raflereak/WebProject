import React, { Component } from "react";
import styes from './boss.module.css';
import { Link, Route, Routes } from 'react-router-dom'
import BossDashboard from "../dashboard/dashboard";
import Accountbook from "../accountbook/accountbook";
import Calendar from '../calendar/calendar';
import Map from '../map/map';
import Notice from '../noticeboard/noticeboard';
import Today24 from '../today24/today24';
import Checklist from '../checklist/checklist';
import Profile from '../profile/profile';
import Sidebar from "../components/sidebar/sidebar";
import Statistics from '../statistics/statistics';

class Boss extends Component{
    constructor(props) {
        super(props);
    }

    
    render() {
        return(
            <>
            {console.log(this.props)}
            <div>
            <Sidebar user={this.props.user}/>
            <Routes>  
                <Route path = "dashboard" element={<BossDashboard user={this.props.user}/>}/>
                <Route path = "calendar" element={<Calendar user={this.props.user}/>}/>
                <Route path = "accountbook" element={<Accountbook user={this.props.user}/>}/>
                <Route path = "statistics" element={<Statistics user={this.props.user}/>}/>
                <Route path = "map" element={<Map user={this.props.user}/>}/>
                <Route path = "notice" element={<Notice user={this.props.user}/>}/>
                <Route path = "today24" element={<Today24 user={this.props.user}/>}/>
                <Route path = "checklist" element={<Checklist user={this.props.user}/>}/>
                <Route path = "profile" element={<Profile user={this.props.user}/>}/>
                </Routes>
            </div>
            </>
        );
    }
}

export default Boss;