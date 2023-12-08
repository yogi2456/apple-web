import React from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import api from '../helpers/Axios.Config';
import toast from 'react-hot-toast';

function Login() {

    const router = useNavigate();

    const [userData, setUserData] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data submitted to backend..")
        if (userData.email && userData.password) {
          if (userData.password.length >= 8) {
            try {
              const response = await api.post("/auth/login", { userData });
              // const response = { data: { success: true } };
              if (response.data.success) {
                toast.success("Login successfull.")
                setUserData({ email: "", password: "" })
                router("/")
              } else {
                throw new Error("Something went wrong..")
              }
            } catch (error) {
              toast.error(error?.message)
              console.log(error, "error here")
            }
          } else {
            alert("Password must be 8 digit.")
          }
        } else {
          alert("Please fill the all values..")
        }
      }
  return (
    <>

<div className='navbar'>
        <div className='navbar1'>
            <p><i class="fa-brands fa-apple fa-xl" style={{color: "black"}}></i></p>
            <p>Store</p>
            <p>Mac</p>
            <p>iPad</p>
            <p>iPhone</p>
            <p>Watch</p>
            <p>Vision</p>
            <p>AirPods</p>
            <p>Tv & Home</p>
            <p>Entertainment</p>
            <p>Accessories</p>
            <p>Support</p>
            <p><i class="fa-solid fa-magnifying-glass fa-xl" style={{color: "black"}}></i></p>
            <p><i class="fa-solid fa-bag-shopping fa-xl" style={{color: "black"}}></i></p>
        </div>
        </div>




    <div className='login'>
        <div className='login1'>
            <div className='login2'>
                <h1>Login for faster checkout.</h1>
                <h3>Login in to Apple Store</h3>
                <form onSubmit={sendDataToBackend}>
                    <input className='login3' placeholder='Email' name='email' type='email' onChange={handleChange}/>
                    <input className='login4' placeholder='Password' name='password' type='password' onChange={handleChange}/>
                    <input className='loginn' type='submit' value='Login'/>
                </form>
                <div className='login5'>
                    <p></p>
                    <p>Remember me</p>
                </div>
                <div className='login6'>
                    <p>Forget Password?</p>
                    <p><i class="fa-solid fa-square-arrow-up-right" style={{color: "#306acf"}}></i></p>
                </div>
                <div className='login7'>
                    <p>Don't have an Apple ID?</p>
                    <p onClick={() => router('/register')}>Create yours now.</p>
                    <p><i class="fa-solid fa-square-arrow-up-right" style={{color: "#306acf"}}></i></p>
                </div>
            </div>
        </div>
        <div className='login8'></div>
        <div className='login9'>
            <div className='login10'>
                <p>Need some help?</p>
                <p>Chat now</p>
                <p>or call 1-800-MY-APPLE.</p>
            </div>
        </div>
    </div>

    <div className='login11'>
        <div className='login12'>
            <div className='login13'>
                <p>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our</p>
                <p>Security Policy .</p>
            </div>
            <div className='login8'></div>
            <div className='login14'>
                <p>More ways to shop:</p>
                <p>Find an APPLE STORE</p>
                <p>or</p>
                <p>other retailer</p>
                <p>near you. Call 1-800-MY-APPLE.</p>
            </div>
            <div className='login15'>
                <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
                <p>Privacy Policy</p>
                <p></p>
                <p>Terms of Use</p>
                <p></p>
                <p>Sales and Refunds</p>
                <p></p>
                <p>Legal</p>
                <p></p>
                <p>Site Map</p>
                <p>United states</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
