import React, { Component } from 'react';
import axios from 'axios'
import styles from './login.module.css';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          selectValue: "사장",
        };
      }

      user = []

      id = React.createRef()
      password = React.createRef()

      handleChange = (e) => {
        this.setState({
          selectValue: e.target.value
        });
      };

      onType = () => {
        this.props.type(this.state.selectValue)
      }

      alert = () => {
        alert("현재 지원하지 않는 기능입니다")
      }

      onLogin = async() => {
        if (this.state.selectValue === "사장"){
        const result = await axios.get(`/login/${this.id.current.value}/${this.password.current.value}/boss`)
        .then(res => {
          if(typeof(res.data === Object)){
            alert("로그인 성공!")
            this.user = res.data
            this.props.login(this.user)
          }
          else{
            alert(res.data)
            this.user = res.data
            this.props.login(this.user)
          }
        })}
        else{
          const result = await axios.get(`/login/${this.id.current.value}/${this.password.current.value}/arba`)
          .then(res => {
            alert(res.data)
            this.user = res.data
            this.props.login(this.user)
        })
      }
    }

    render() {
        return(
            <>
            <div className={styles.div__login}>
            <div className={styles.textlogin}>
                로그인
            </div>
        <div className={styles.div__main}>
            <div className={styles.div__button_select}>
                
                <input className={styles.arba_boss} id="bigboss_login" type="radio" name="select" value="사장" checked={this.state.selectValue === "사장"}
          onChange={this.handleChange}/>
          <label htmlFor="bigboss_login">
            <span>사장</span>
          </label>
          <input className={styles.arba_boss} id="arba_login" type="radio" name="select" value="알바" checked={this.state.selectValue === "알바"}
          onChange={this.handleChange}/>
          <label htmlFor="arba_login">
            <span>알바</span>
          </label>


            </div>
            <div className={styles.div__id}>
                <input ref={this.id} type="text" placeholder="ID"/>
            </div>
            <div className={styles.div__pw}>
                <input ref={this.password} type="text" placeholder="PW"/>
            </div>
            <div className={styles.div__putter}>
              {this.state.selectValue === "사장"
                ?<div>
                <Link to='/boss'>
                <button onClick={this.onLogin} className= {styles.button_Login}>로그인</button>
                </Link>
                <Link to={{pathname: '/register', state: {test: this.user}}}>
                <button onClick={this.onType} className={styles.button_newAccount}>회원가입</button>
                </Link>
                <button onClick={this.alert} className={styles.button_google}>Google 로그인</button>
                </div>
                :<div>
                <Link to='/arba/dashboard'>
                <button onClick={this.onLogin} className={styles.button_Login}>로그인</button>
                </Link>
                <Link to='/register'>
                <button onClick={this.onType} className={styles.button_newAccount}>회원가입</button>
                </Link>
                <button className={styles.button_google}>Google 로그인</button>
                
                </div>
              }
            </div>
        </div>
        </div>
        </>
        )
    }
}

export default Login;