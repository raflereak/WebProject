import React, { Component } from 'react';
import axios from 'axios'
import styles from './newaccount.module.css';
import Round from '../components/round/round';
import { Link } from 'react-router-dom';

class Newaccount extends Component{
    constructor(props) {
        super(props);
    }

    user = []

    id = React.createRef()
    password = React.createRef()
    name = React.createRef()
    age = React.createRef()
    bank_account = React.createRef()

    onJoin = async() => {
        const result = await axios.post('/register', {
          id: this.id.current.value,
          password: this.password.current.value,
          name: this.name.current.value,
          age: this.age.current.value,
          bank_account: this.bank_account.current.value
        })
        .then(res => {
            this.user = res.data
            this.props.login(this.user)
            alert("가입이 완료되었습니다")
        })  
    }

    render(){
        return(
            <>
            <Round />
            <div className={styles.main}>
                <div className={styles.title}>
                    {this.props.type} 회원가입
                </div>
                <div className={styles.inputcard}>
                    <div>
                        아이디
                        <input ref={this.id} className={styles.input_text} type="text"></input>
                    </div>
                    <div>
                        비밀번호
                        <input ref={this.password} className={styles.input_text} type="text" ></input>
                    </div>
                    <div>
                        이름
                        <input ref={this.name} className={styles.input_text} type="text" ></input>
                    </div>
                    <div>
                        연령
                        <input ref={this.age} className={styles.input_text} type="text" ></input>
                    </div>
                    <div>
                        계좌번호
                        <input ref={this.bank_account} className={styles.input_text} type="text" ></input>
                    </div>
                </div>
            </div>
            <div>
            <Link to = '/boss'>
            <button onClick={this.onJoin} className={styles.button_register}>가입하기</button>
            </Link>
            </div>
            </>
        )
    }
}
export default Newaccount;   