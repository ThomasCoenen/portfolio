import React from 'react'
import '../App.css';
import kayak from '../images/kayak.jpg';

export default function About() {
    return (
        <div className="about">
            <img src={kayak} alt=""/>
            <p className="">
            Hey everyone! Welcome to my page and thanks for visiting. 
            I'm a self taught full-stack web developer, entreprenuer, guitarist, fisherman,
            and gardener. I'm an engineer by trade but decided to become a
            full stack developer.
            <br/>
            <br/>
            My main focus is Full Stack Web Development, Web Scraping, and Data Analytics
            <br/>
            <br/>
            Known Languages: Javascript, HTML, CSS, JQuery, PostgreSQL, MongoDB, Express/NodeJS, Python.
            <br/>
            <br/>
            My speciailty is building beautiful and responsive desktop/mobile friendly sites that
            scale well for all devices. I also enjoy scraping websites and analyzing real world data. I'm extremely driven to learn more about
            all aspects of web developement and am constanly learning new skills 
            everyday! Staying busy, solving complex problems, and creating opportunities for others have always been of 
            great interest!
            <br/>
            <br/>
            I would love to work together and am currently looking for a full time job in tech as a 
            Full Stack Web Developer.
            I'm also looking to add more projects to my portfolio. So lets work together and build stuff.
            </p>
        </div>
    )
}
