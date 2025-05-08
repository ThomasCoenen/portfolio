import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import proj1img from '../images/logo6.png';
import event_logo from '../event_logo.png'
import coun from '../images/Finallogo.png'

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
            <a className="specific-project" href="https://musician-social-media-a7f49b80ac5d.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80" height="300" width="300" alt="Social-Media"/>
              <p>Social Media/Musician Finder App</p>
            </a>

            <a className="specific-project" href="https://www.transformedwithincounseling.com/" target="_blank" rel="noopener noreferrer">
              <img className="counImg" src={coun} style={{height:'300px',width:'300px'}} alt=""/>
              <p>Transformedwithincounseling.com</p>
            </a>

            <a className="specific-project" href="https://event-dish-fa65a693c66a.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={event_logo} alt="Event Dish" style={{height:'300px',width:'300px'}}/>
              <p>Event Dish</p>
            </a>

            <a className="specific-project" href="https://ecommerce-app123-c8054e6e45bf.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={proj1img} height="300" width="300" alt="E-Commerce"/>
              <p>E Commerce Website</p>
            </a>

            {/* <a className="specific-project" href="https://silver-scraper-bc13cd464a13.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1603626202791-a0be8400a260?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="300" width="300" alt="Silver-Scraper"/>
              <p>Silver Best Deals App</p>
            </a> */}

            {/* <a className="specific-project" href="https://admin-dashboard123.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" height="300" width="300" alt="Silver-Scraper"/>
              <p>Admin Dashboard</p>
            </a> */}


            {/* <a className="specific-project" href="https://database-mysql-test.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" height="300" width="300" alt=""/>
              <p>Restaurant Reviewer App</p>
            </a> */}

            {/* <a className="specific-project" href="https://github.com/ThomasCoenen/cronScraperAmps/tree/main" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" height="300" width="300" alt="Social-Media"/>
              <p>Guitar Amp Scraping Project</p>
            </a> */}

            {/* <a className="specific-project" href="https://github.com/ThomasCoenen/NasaWildfiresGoogleMapsAPI" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" height="300" width="300" alt=""/>
              <p>Nasa Wildfires - GoogleMapsAPI</p>
            </a> */}

            {/* <a className="specific-project" href="https://imessage-clone-a3b58.web.app/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" height="300" width="300" alt=""/>
              <p>Chat App</p>
            </a> */}

            {/* <a className="specific-project" href="https://reactsocial-15668.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" height="300" width="300" alt="IG-Clone"/>
              <p>Instagram Clone</p>
            </a> */}

            {/* <a className="specific-project" href="https://fb-clone-6d496.web.app" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" height="300" width="300" alt="FB-Clone"/>
              <p>Facebook Clone</p>
            </a> */}

            {/* <a className="specific-project" href="https://thomascoenen.github.io/TechnicalDocumentationPage.github.io/" target="_blank" rel="noopener noreferrer">
              <img src="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" height="300" width="300" alt="FB-Clone"/>
              <p>Technical Documentation Page</p>
            </a> */}

          </div>
          <button className="adviceButton" type="submit" className="submitcontactbutton" onClick={() => getAdvice()}>Click me for some free advice!</button>
          <h4 className="adviceText">{advice}</h4>
        </section>



        {/* <button className="adviceButton" type="submit" className="submitcontactbutton" onClick={() => getAdvice()}>Click me for some free advice!</button>
        <h4 className="adviceText">{advice}</h4> */}

      </>
  )
}
