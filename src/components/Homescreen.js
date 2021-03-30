import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import proj1img from '../images/logo6.png';

export default function Homescreen() {
  const [advice, setAdvice] = useState("")

  const getAdvice = ()=>{
    fetch("https://api.adviceslip.com/advice", {method:"get",})
    .then(res=>res.json()) 
    .then(data => {
        console.log("adviceData:", data.slip.advice)
        setAdvice(data.slip.advice)
    })
    .catch(err =>{
        console.log(err)
    })
  }

  return (
      <>
        <section id="welcome">
            <h2 style={{textAlign: "center", marginRight: "14px", marginLeft:"14px"}}>Hello I'm Thomas Coenen, Welcome to my Official Website</h2>
        </section>

        <section id="projects">

          <div id="project-heading">
            <h2>These are some of my projects</h2>
          </div>

          <div className="project-grid">
            <a className="specific-project" href="https://social-media123.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" height="300" width="300" alt="Social-Media"/>
              <p>Social Media Site</p>
            </a>

            <a className="specific-project" href="https://pure-island-57180.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={proj1img} height="300" width="300" alt="E-Commerce"/>
              <p>E Commerce Website</p>
            </a>

            <a className="specific-project" href="https://github.com/ThomasCoenen/cronScraperAmps/tree/main" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" height="300" width="300" alt="Social-Media"/>
              <p>Guitar Amp Scraping Project</p>
            </a>

            <a className="specific-project" href="https://imessage-clone-a3b58.web.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="300" width="300" alt=""/>
              <p>Chat App</p>
            </a>

            <a className="specific-project" href="https://reactsocial-15668.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" height="300" width="300" alt="IG-Clone"/>
              <p>Instagram Clone</p>
            </a>

            <a className="specific-project" href="https://fb-clone-6d496.web.app" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" height="300" width="300" alt="FB-Clone"/>
              <p>Facebook Clone</p>
            </a>

            <a className="specific-project" href="/">
              <img src="https://blog.cartong.org/wordpress/wp-content/uploads/2019/06/tech-documentation-image1.png" height="300" width="300" alt=""/>
              <p>Technical Documentation Page</p>
            </a>
            {/* <a href="/" className="btn btn-show-all" target="_blank">
            
            Show all</a> */}
          </div>
          <button className="adviceButton" type="submit" className="submitcontactbutton" onClick={() => getAdvice()}>Click me for some free advice!</button>
          <h4 className="adviceText">{advice}</h4>
        </section>
        {/* <button className="adviceButton" type="submit" className="submitcontactbutton" onClick={() => getAdvice()}>Click me for some free advice!</button>
        <h4 className="adviceText">{advice}</h4> */}

      </>
  )
}
