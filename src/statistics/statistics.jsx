import styles from "./statistics.module.css"
import React, { PureComponent } from 'react';
import { LineChart, Line } from 'recharts';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Statistics extends PureComponent {

  state = {
    data1: [
      {
        name: '08:00 ~ 11:00',
        margin: 4000,
        benefit: 2400,
        sales: 2400,
      },
      {
        name: '11:00 ~ 14:00',
        margin: 16000,
        benefit: 3908,
        sales: 2000,
      },
      {
        name: '14:00 ~ 18:00',
        margin: 7000,
        benefit: 3800,
        sales: 2500,
      },
      {
        name: '18:00 ~ 20:00',
        margin: 14000,
        benefit: 4300,
        sales: 2100,
      },
      {
        name: '20:00 ~ 24:00',
        margin: 2000,
        benefit: 4300,
        sales: 2100,
      },
    ],
    data2: [
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
    data3: [
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
    activeIndex1: 0,
    activeIndex2: 0,
    activeIndex3: 0,
  };

  handleClick1 = (data, index) => {
    this.setState({
      activeIndex1: index,
    });
  };
  handleClick2 = (data, index) => {
    this.setState({
      activeIndex2: index,
    });
  };
  handleClick3 = (data, index) => {
    this.setState({
      activeIndex3: index,
    });
  };

  render() {
    const { activeIndex1, data1 } = this.state;
    const { activeIndex2, data2 } = this.state;
    const { activeIndex3, data3 } = this.state;
    const activeItem1 = data1[activeIndex1];
    const activeItem2 = data2[activeIndex2];
    const activeItem3 = data3[activeIndex3];

    return (
      <div className={styles.whiteboard}>
        <div className={styles.title}>
          통계
        </div>
      <div className={styles.rowline}>
      <div className={styles.line}>
      <div className={styles.chart1}>
        <p>시간별 마진</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data1}>
            <Bar dataKey="margin" onClick={this.handleClick1}>
              {data1.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex1 ? '#FE2E2E' : '#0080FF'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`마진 시간 : "${activeItem1.name}": ${activeItem1.margin}(만)원`}</p>
      </div>
      <div className={styles.chart2}>
        <p>시간 효율</p>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data1}>
            <Bar dataKey="benefit" onClick={this.handleClick2}>
              {data1.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex2 ? '#FF8000' : '#424242'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`수익 of "${activeItem2.name}": ${activeItem2.uv}`}</p>
      </div>
      </div>
      <div className={styles.chart3}>
        <p>차트</p>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width={150} height={40} data={data1}>
            <Bar dataKey="sales" onClick={this.handleClick3}>
              {data1.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex3 ? '#01DFA5' : '#4000FF'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="content">{`판매량 of "${activeItem3.name}": ${activeItem3.uv}`}</p>
      </div>
      </div>
      <div className={styles.rowButton}>
        <button className={styles.button}>상품 분석</button>
        <button className={styles.button}>구매자 분석</button>
        <button className={styles.button}>리뷰 분석</button>
        <button className={styles.button}>test</button>
      </div>
      </div>
    );
  }
}
