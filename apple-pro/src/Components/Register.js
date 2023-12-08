import React, { useState } from 'react'
import './Register.css'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/Axios.Config';

function Register() {
    const router = useNavigate();
    const [userData, setUserData] = useState({name: "", email: "", password: ""});

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        // alert("Data submitted to backend..")
        if (userData.name && userData.email && userData.password) {
          if (userData.password.length >= 8) {
            try {
              const response = await api.post("/auth/register", { userData });
              // const response = { data: { success: true } };
              if (response.data.success) {
                toast.success("Registeration successfull.")
                setUserData({ name: "", email: "", password: "" })
                router("/login")
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




    <div className='register'>
        <div className='register1'>
            <div className='register2'>
                <h1>Register for faster checkout.</h1>
                <h3>Register in to Apple Store</h3>
                <form onSubmit={sendDataToBackend}>
                    <input className='register16' placeholder='Name' name='name' type='text' onChange={handleChange}/>
                    <input className='register3' placeholder='Email' name='email' type='email' onChange={handleChange}/>
                    <input className='register4' placeholder='Password' name='password' type='password' onChange={handleChange}/>
                    <input className='registerr' type='submit' value='Register'/>
                </form>
                <div className='register5'>
                    <p></p>
                    <p>Remember me</p>
                </div>
                <div className='register6'>
                    <p>Forget Password?</p>
                    <p><i class="fa-solid fa-square-arrow-up-right" style={{color: "#306acf"}}></i></p>
                </div>
                <div className='register7'>
                    <p>Don't have an Apple ID?</p>
                    <p>Create yours now.</p>
                    <p><i class="fa-solid fa-square-arrow-up-right" style={{color: "#306acf"}}></i></p>
                </div>
            </div>
        </div>
        <div className='register8'></div>
        <div className='register9'>
            <div className='register10'>
                <p>Need some help?</p>
                <p>Chat now</p>
                <p>or call 1-800-MY-APPLE.</p>
            </div>
        </div>
    </div>

    <div className='register11'>
        <div className='register12'>
            <div className='register13'>
                <p>The Apple Online Store uses industry-standard encryption to protect the confidentiality of the information you submit. Learn more about our</p>
                <p>Security Policy .</p>
            </div>
            <div className='register8'></div>
            <div className='register14'>
                <p>More ways to shop:</p>
                <p>Find an APPLE STORE</p>
                <p>or</p>
                <p>other retailer</p>
                <p>near you. Call 1-800-MY-APPLE.</p>
            </div>
            <div className='register15'>
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

export default Register
