import React, { Component, PureComponent } from 'react';
import styles from './dashboard.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChecklistComponent from '../checklist/checklistcomponent';
import AccountCardBlue from '../accountbook/accountcardblue';
import AccountCardRed from '../accountbook/accountcardred';


class BossDashboard extends Component{
  state = {
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render(){
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];
    return (
      <>
          <div className={styles.whiteboard}>
            <div className={styles.title}>대시보드</div>
            <div className={styles.columline1}>
            <div className={styles.calendarCard}>
            <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} events={[{title: '2시간', date: '2021-12-10', color: 'blue'}, {title: '8시간', date: '2021-12-10', color: 'red'}]}/>
          </div >
          <div className={styles.accountbook}>
          <AccountCardRed date="날짜" info="내용" won="금액" />
          <AccountCardRed date="2021-12-01" info="판매" won="10000" />
          <AccountCardRed date="2021-12-01" info="판매" won="10000" />
          <AccountCardRed date="2021-12-01" info="판매" won="10000" />
          <AccountCardRed date="2021-12-01" info="판매" won="10000" />
          <div className={styles.total}>
            <h3>합계 : +40000(원)</h3>
          </div>
          </div>
          <ChecklistComponent />
          </div>
          <div className={styles.columline2}>
          <div className={styles.chart}>
          <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#FE2E2E' : '#5882FA'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
        </div>
        <div className={styles.rowButton}>
        <button className={styles.button}>상품 분석</button>
        <button className={styles.button}>구매자 분석</button>
        <button className={styles.button}>리뷰 분석</button>
        <button className={styles.button}>전체 통계</button>
      </div>
        </div>
        </div>
        </>
    );
  }
};







/*
class BossDashboard extends Component{
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
*/
export default BossDashboard;

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