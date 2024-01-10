import React from 'react'
import "./frontPage.css"
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
const FrontPage = () => {
  const navigate = useNavigate();
  const Contact = () =>{
  
    navigate("/Contact");
  }

  return (
 <>
 
 <div class="banner-area">
    <header>
           <div class="menu">
                <ul>
                    <li><a href="/" >LogOut</a></li>
                    <li><a href='/Contact'>Contact</a></li>
                </ul>
            </div>

        </header>
        <div class="banner-text">
            <h1>Harshad Agarwal</h1>
            <p>Xenon round 2 assignment</p>
            <a href="#">Read More</a>
            <a href="#">Watch More</a>
           
        </div>
  


    </div>
    
 </>
  )
}
export default FrontPage;