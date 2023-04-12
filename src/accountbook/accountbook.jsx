import React, { Component, PureComponent } from 'react';
import styles from './accountbook.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import AccountCardRed from './accountcardred';
import AccountCardBlue from './accountcardblue';


class Accountbook extends Component{

  
  constructor(props) {
    super(props);

    this.state = {
    }
}

  render(){

    return(
      <>
        <div className={styles.whiteboard}>
          <div className={styles.title}>가계부</div>
          <div>
            <div className={styles.line}>
            <div className={styles.oneline}>
              <div className={styles.red}>
                <AccountCardRed date="날짜" info="내용" won="금액" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="판매" won="10000" />
                <AccountCardRed date="2021-12-01" info="합계" won="70000" />
              </div>
              <div className={styles.blue}>
                <AccountCardBlue date="날짜" info="내용" won="금액" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="발주" won="10000" />
                <AccountCardBlue date="2021-12-01" info="합계" won="90000" />
              </div>
            </div>
            <div className={styles.twoline}>
              총계 -20000(원)
            </div>
          </div>
          </div>
        </div>
      </>
    )
  }
  
}



export default Accountbook;