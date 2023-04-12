import React, { Component } from "react";
import { Link, Route, Routes } from 'react-router-dom'
import ArbaDashboard from './arbadashboard/arbadashboard';
import ArbaSidebar from './arbasidebar/arbasidebar';
import ArbaCalendar from './arbacalender/arbacalender';
import ArbaMap from './arbamap/arbamap';
import ArbaNoticeboard from './arbanoticeboard/arbanoticeboard';
import ArbaProfile from './arbaprofile/arbaprofile';
import ArbaToday24 from './arbatoday24/arbatoday24';
import ArbaChecklist from "./arbachecklist/arbachecklist";

class Arba extends Component{
    render() {
        return(
            <div>
            <ArbaSidebar/>
            <Routes>  
                <Route path = "dashboard" element={<ArbaDashboard/>}/>
                <Route path = "calendar" element={<ArbaCalendar />}/>
                <Route path = "map" element={<ArbaMap />}/>
                <Route path = "notice" element={<ArbaNoticeboard />}/>
                <Route path = "today24" element={<ArbaToday24 />}/>
                <Route path = "checklist" element={<ArbaChecklist />}/>
                <Route path = "profile" element={<ArbaProfile />}/>
                </Routes>
            </div>
        );
    }
}

export default Arba;