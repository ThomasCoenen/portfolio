import React from 'react'
import '../App.css';
import kayak from '../images/kayak.jpg';

export default function About() {
    return (
        <div className="about">
            <img src={kayak} alt="" />
            <p className="">
                Welcome to my page and thanks for visiting.
                I'm a full-stack developer, engineer, entrepreneur, guitarist, fisherman, gardener,
                and avid DIYer. Whether it's building a new home, renovating a home, or building or updating an application,
                facing and solving the challenges along the way is always exciting and rewarding.
            <br />
            <br />
            My main focus of work is Full Stack Development, Web Scraping, and Data Science.
            <br />
            <br />
            Known Languages: Java, Javascript, SQL, Python, HTML, CSS, MongoDB, Express/NodeJS, JQuery
            <br />
            <br />
            My main interest revolves around web and backend development and I've built several full stack apps 
            (please see my projects page). Web scraping and data analytics are also of interest. I want 
            to use my skills to help a team achieve goals and milestones. Team is first. Staying busy, solving 
            complex problems, and creating opportunities for others have always been of
            great interest.
            <br />
            <br />
            I would love to work together and am currently looking for opportunities as a developer.
            I'm also looking to add more projects to my portfolio. So lets work together and build stuff.
            </p>
        </div>
    )
}
