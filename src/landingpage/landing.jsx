import React, { Component } from 'react';
import styles from './landing.module.css';
import { Link } from 'react-router-dom'
import Card from '../components/card/card';
import Round from '../components/round/round';

class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectValue: "사장을"
    };

    this.bigboss ={
      title_1: "손쉬운 알바구하기",
      info_1: "4차 산업의 산유물인 플랫폼 노동의 형식을 채용하여 1회의 근로계약서 작성으로 손쉽게 알바를 구할 수 있습니다.",
      title_2: "편리한 알바 일정 관리",
      info_2: "중구 난방하게 된 알바를 캘린더에 정리해주며, Today24와 체크리스트를 통해 알바생들의 관리가 편리하도록 제공합니다.",
      title_3: "자동화된 급여",
      info_3: "자동화된 급여제공 시스템과 함께 타 핀테크 앱과 연동하여 손 쉬운 자금 관리를 지원합니다.",
      title_4: "간편한 가게 관리 시스템",
      info_4: "많은 가게의 데이터들이 쌓여 가게 상황에 맞게 가게를 운영 할 수 있는 데이터를 제공합니다.",
    }

    this.arba ={
      title_1: "간편한 알바구하기",
      info_1: "4차 산업의 산유물인 플랫폼 노동의 형식을 채용하여 1회의 근로계약서 작성으로 손쉽게 알바를 구할 수 있습니다.",
      title_2: "편리한 알바 일정 관리",
      info_2: "중구 난방하게 된 알바를 캘린더에 정리해주며, 위치와 걸리는 시간까지 알려줘 일정관리가 쉬워집니다.",
      title_3: "손쉬운 급여 및 자금 관리",
      info_3: "자동화된 급여제공 시스템과 함께 타 핀테크 앱과 연동하여 손 쉬운 자금 관리를 지원합니다.",
      title_4: "머가 있을까",
      info_4: "?",
    }
  }
  handleChange = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  };
  render(){
    return(
      <>
        <Round />
        <div className={styles.landing_top}>
          <div className={styles.landing_top_txt}> {this.state.selectValue} 위한 플랫폼</div>
          <Link to='/login'>
            <button className={styles.start_button}>시작하기</button>
          </Link>
          <input id="bigboss" type="radio" name="select" value="사장을" checked={this.state.selectValue === "사장을"}
          onChange={this.handleChange}/>
          <label htmlFor="bigboss">
            <span></span>
          </label>
          <input id="arba" type="radio" name="select" value="알바를" checked={this.state.selectValue === "알바를"}
          onChange={this.handleChange}/>
          <label htmlFor="arba">
            <span></span>
          </label>
        </div>
        <div>
        {this.state.selectValue === "사장을"
          ?<div className={styles.landing_bottom}>
          <Card title={this.bigboss.title_1} info={this.bigboss.info_1}/>
          <Card title={this.bigboss.title_2} info={this.bigboss.info_2}/>
          <Card title={this.bigboss.title_3} info={this.bigboss.info_3}/>
          <Card title={this.bigboss.title_4} info={this.bigboss.info_4}/>
        </div>
        :<div className={styles.landing_bottom}>
          <Card title={this.arba.title_1} info={this.arba.info_1}/>
          <Card title={this.arba.title_2} info={this.arba.info_2}/>
          <Card title={this.arba.title_3} info={this.arba.info_3}/>
          <Card title={this.arba.title_4} info={this.arba.info_4}/>
        </div>
  }</div>
      </>
    )
  }
  
}

export default Landing;   