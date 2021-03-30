import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default function Footer() {
    const [advice, setAdvice] = useState("")
    const [question, setQuestion] = useState("")

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

    const getQuestion = ()=>{
        fetch("http://jservice.io/api/random", {method:"get",})
        .then(res=>res.json()) 
        .then(data => {
            console.log("questionData:", data[0])
            // setQuestion()
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return (
        <section id="contact">
            <div id="convo">
                {/* <h3 style={{fontSize:"27px"}}>Let's work together</h3>
                <h5 style={{fontSize:"15.6px"}}>How do you take your coffee?</h5> */}
                {/* <button type="submit" className="submitcontactbutton" onClick={() => getAdvice()}>Click me for some free advice!</button>
                <h4 className="adviceText">{advice}</h4> */}
                {/* <button type="submit" onClick={() => getQuestion()}>Click me for a question!</button> */}
                {/* <h4 className="adviceText">{advice}</h4> */}
            </div>

            <ul id="connect-links">
                <li><a href="https://github.com/ThomasCoenen" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/thomas-coenen-55773b90/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><Link to="/contact">Email Me</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>

            <footer className="bottomquote">
                <h3>“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.” -J.K. Rowling</h3>
                {/* <button type="submit" onClick={() => getAdvice()}>Click me for some free advice!</button>
                <h3 className="adviceText">{advice}</h3> */}
            </footer>
        </section>
    )
}
