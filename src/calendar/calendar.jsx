import React, { Component } from 'react';
import styles from './calendar.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

class Calendar extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectValue: "사장"
    };

    this.caledarCardData = {
      month : 12,
      day : 10
    };
  }
  render(){
    return(
      <>
        <div className={styles.whiteboard}>
          <div className={styles.calendarTitle}>캘린더</div>
          <div className={styles.cardy}>
          <div className={styles.calendarCard}>
            <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} events={[{title: '2시간', date: '2021-12-10', color: 'blue'}, {title: '8시간', date: '2021-12-10', color: 'red'}]}/>
          </div>
          <div className={styles.dayTimelineCard}>
            <FullCalendar defaultView="timegrid" plugins={[ resourceTimelinePlugin ]} events={[{title: '2시간', date: '2021-12-10', color: 'blue'}, {title: '8시간', date: '2021-12-10', color: 'red'}]} duration={2}/>
          </div>
          </div>
          <div className={styles.dayTimeCard}>
            <FullCalendar defaultView="timegrid" plugins={[ timeGridPlugin ]} events={[{title: '2시간', date: '2021-12-10', color: 'blue'}, {title: '8시간', date: '2021-12-10', color: 'red'}]} duration={2}/>
          </div>
          <div className={styles.oneDayShift}>
            <div className={styles.day}>{this.caledarCardData.month}월 {this.caledarCardData.day}일</div>
            <div className={styles.info}>
              
            </div>
          </div>
        </div>
      </>
    )
  }
  
}

export default Calendar;