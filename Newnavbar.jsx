import React from 'react'
import "./Newnavbar.css"
import Button from "../Button/Button.jsx";
import mui from "./mui.png"
const Newnavbar = () => {
  return (
    <>
        <header>
            <div className='logo'>
                <img src={mui} alt="" />       
                <h1 className='name'>Mumair</h1>
            </div>
            <nav>
                <a href="#home" >Home</a>
                <a href="#about" >About Me</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
                <Button className={"nav-button"} text={"Download CV"}/>
            </nav>
        </header>
    </>
  )
}

export default Newnavbar
