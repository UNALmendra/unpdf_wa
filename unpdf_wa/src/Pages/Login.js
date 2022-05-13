import '../App.css';
import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { withRouter } from '../withRouter';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username : '',
      password : ''
    };
    this.doLogin = this.doLogin.bind(this);
  }
  
  doLogin = () => {
    console.log(this.state);
    this.props.navigate('/home');
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
              <label htmlFor="usernameinput">Username</label>
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