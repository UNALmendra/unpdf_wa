import '../App.css';
import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { withRouter } from '../withRouter';
import { postLogIn } from './Login/queries/axios';
import jwt_decode from "jwt-decode";

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    };
    this.doLogin = this.doLogin.bind(this);
  }
  
  doLogin = async () => {
    let response = await postLogIn(this.state.username,this.state.password)
    let responseInfo = response.data.data.postLogIn
    if(responseInfo.success){
      console.log(responseInfo.message)
      let decodedToken = jwt_decode(responseInfo.token)
      let id = decodedToken.sub[0];
      localStorage.setItem('id',id);
      this.props.navigate('/home/home')
    }else{
      console.log(responseInfo.message)
    }
  }

  render(){
    return (
      <div>
      <ParticlesBg type="circle" bg={true} />
      <div className='flex flex-row justify-content-center'>
        <div className='flex align-items-center full-height'>
        <Card >
          <div className='flex flex-column justify-content-center m-5'>
            <span className="p-float-label m-5">
              <InputText id='usernameinput' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
              <label htmlFor="usernameinput">username</label>
            </span>
            <span className="p-float-label m-5">
              <Password id='passwordinput' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} feedback={false} />
              <label htmlFor="passwordinput">Password</label>
            </span>
          </div>
          <div className='flex justify-content-center'>
            <Button label="Log in" className='m-2' onClick={this.doLogin}/>
          </div>
        </Card>
        </div>
      </div>
    </div> 
    );
  }
}

export default withRouter(Login);