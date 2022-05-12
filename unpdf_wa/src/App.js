import './App.css';
import ParticlesBg from 'particles-bg';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


export default function App() {
  let navigate = useNavigate();
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <div className='flex justify-content-center fullHeight m-5'>
        <Card >
          <div  className='flex justify-content-center'>
            <img src='/unpdf.svg' className='landinglogo'/>
          </div>
          <div className='flex justify-content-center'>
            <Button label="Log in" className='m-2' onClick={toLogin}/>
            <Button label="Sign in" className='m-2' onClick={toSignin}/>
          </div>
        </Card>
      </div>
    </div> 
  );

  function toSignin(){

  }
  
  function toLogin(){
    navigate("/login");
  }
  
}
