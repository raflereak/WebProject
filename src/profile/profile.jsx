import React, { Component } from 'react';
import styles from './profile.module.css';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import img from "../img/원화관.jpg";



const star = {
  recent1 : 5,
  recent2 : 5,
  recent3 : 5,
}


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: "수정"
    };
    this.store = {
      name: '소프트웨어',
      boss : '김응희',
      number : '041-1111-1111',
      phoneNumber : '010-2222-2222',
      where : '원화관605호',
      registerNo : '1111-1111-1111',
    }
  }

  user = this.props.user

  handleChange = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  };

  render(){
    return(
      <div className={styles.whiteboard}>
        <div className={styles.head}>
          <div>가게 프로필</div>
        </div>
  
        <div className={styles.body}>
          <div className={styles.profile}>
          <div>
            <img className={styles.storeimage} alt="store.jpg" src={img}></img>
          </div>
          <div className={styles.info}>
          {this.state.selectValue === "수정"
                  ?<div className={styles.infomation}>
                  <div>가게 이름 : {this.user.store}</div>
                  <div>사장 이름 : {this.user.name}</div>
                  <div>가게 전화번호 : {this.store.number} </div>
                  <div>사장 전화번호 : {this.store.phoneNumber} </div>
                  <div>장소 : {this.store.where}</div>
                  <div>사업자 등록번호 : {this.store.registerNo} </div>
                  </div>
                  :<div className={styles.info}>
                  <div>가게 이름 :
                  <input type="text" className={styles.input} placeholder={this.store.name}/></div>
                  <div>사장 이름 :
                  <input type="text" className={styles.input}placeholder={this.store.boss}/></div>
                  <div>가게 전화번호 : 
                  <input type="text" className={styles.input}placeholder={this.store.number}/></div>
                  <div>사장 전화번호 : 
                  <input type="text" className={styles.input}placeholder={this.store.phoneNumber}/></div>
                  <div>장소 :
                  <input type="text" className={styles.input}placeholder={this.store.where}/></div>
                  <div>사업자 등록번호 :
                  <input type="text" className={styles.input}placeholder={this.store.registerNo}/></div>
                  </div>
                }
          </div>
          </div>
          <div className={styles.div__button_select}>
          <input id="modify" type="radio" name="select" value="설정" checked={this.state.selectValue === "설정"}
          onChange={this.handleChange}/>
          <label htmlFor="modify">
            <span>수정</span>
          </label>
          <input id="setting" type="radio" name="select" value="수정" checked={this.state.selectValue === "수정"}
          onChange={this.handleChange}/>
          <label htmlFor="setting">
            <span>설정</span>
          </label>
          </div>
          
        </div>
  
        <div className={styles.tail}>
          <div className={styles.starScore}>
            평점
            <div className={styles.printScore}>평점 : {this.user.score}</div>
            
          </div>
  
          <div className={styles.recentScore}>
            최근 평가
          </div>
  
          <div className={styles.recentArba}>
            최근 알바생
          </div>
        </div>
      </div>
    )
  }
  
}
export default Profile;