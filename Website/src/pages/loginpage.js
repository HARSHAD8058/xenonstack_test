import React, { useState } from 'react'
import './loginpage.css';
import {Link ,json,useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
export default function Login() {
    let navigate =useNavigate();
    const [userData ,SetuserData] = useState({
      email:"",
      password:""
    });
    const CreateUser = async(e)=>{
         //Synthetic Event
        e.preventDefault();
       
        const response  = await fetch("http://localhost:5002/api/Singup" ,{
          method:'POST',
          headers:{
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({email:userData.email,password:userData.password})
        })
        const ans = await response.json();
      console.log(ans);
      if(!ans.success){
        swal(" ", "Invalid Value", "warning");
      }else if(ans.success){
       
        navigate("/Home");
        swal(" ", "Your Account is created ", "success");
      }
  
    }
    const UserData = async(event)=>{
  SetuserData({...userData,[event.target.name]:event.target.value})
    }
    console.log(userData);
  return (
    <>
        
        <div className='Main_login_div'>
        <div className='Sub_div_login'>
    
          <div className='inner_div_login'>
          <h2> Login for "Xenon"</h2>
          <form className='form' onSubmit={CreateUser}>
          <div class="form__input-group">
          <input class="form__input" type="text" name='email' value={userData.email} onChange={UserData} />
          <label class="form__input-label">EMAIL</label>
          </div>
          <div class="form__input-group">
          <input class="form__input" type="text"  name='password' value={userData.password} onChange={UserData}/>
          <label class="form__input-label">PASSWORD</label></div>
          
     
         <br></br>
         
    
          <button class="button-88" role="button" type='submit'>Create account</button>
 
          </form>
          
      
         
          </div>
        </div></div>
   
   


    
    </>

  )
}

