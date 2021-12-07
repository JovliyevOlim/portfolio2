import '../Home.css'
import logo from '../image/ShareX_Logo.png'
import {useState} from "react";

function Home(){

    window.addEventListener("scroll",function (){
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 0)
    })
    const [show,setShow]  = useState( true)

    return(
        <div className={'home'} id={'home'}>
            <div className="home-bg">
                <div className="header d-flex align-items-center pxy-30">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation pxy-30">
                        <ul className="navbar d-flex">
                            <li className={'nav-items mx-15'}><a href="#home">Home</a></li>
                            <li className={'nav-items mx-15'}><a href="#about">About</a></li>
                            <li className={'nav-items mx-15'}><a href="#services">Services</a></li>
                            <li className={'nav-items mx-15'}><a href="#portfolio">Portfolio</a></li>
                            <li className={'nav-items mx-15'}><a href="#blog">Blog</a></li>
                            <li className={'nav-items mx-15'}><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="toggle-menu">
                        <svg onClick={()=> setShow(!show)}
                             xmlns="http://www.w3.org/2000/svg"
                             width="30"
                             height="30"
                             fill="currentColor"
                             className="bi bi-justify white pointer"
                             viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </div>
                    {show ?(
                    <div className="sideNavbar">
                        <ul className="sidebar d-flex">
                            <li className="sideNavbar nav-items"><a href="#home">Home</a></li>
                            <li className="sideNavbar nav-items"><a href="#about">About</a></li>
                            <li className="sideNavbar nav-items"><a href="#services">Services</a></li>
                            <li className="sideNavbar nav-items"><a href="#portfolio">Portfolio</a></li>
                            <li className="sideNavbar nav-items"><a href="#blog">Blog</a></li>
                            <li className="sideNavbar nav-items"><a href="#contact">Contact</a></li>
                        </ul>
                    </div> ) : null }
                </div>
                <div className="container1">
                    <div className="home-content">
                        <h1 className="home-text pz-10">
                            WELCOME TO  MY WORLD
                        </h1>
                        <h2 className="home-text pz-10">
                            Hi, I'm Jovliyev Olim
                        </h2>
                        <h3 className='home-text sweet pz-10'>
                            Frontend Developer
                        </h3> 
                        <h4 className='home-text pz-10'>
                            based in Uzbekistan
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home