import React, {useState} from 'react'
import '../App.css';
// import { Axios, db } from './firebase'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAR0hEFiW1O1LWmN9Pne7zHBkj3ApTNsJU",
    authDomain: "portfolio-5ab60.firebaseapp.com",
    databaseURL: "https://portfolio-5ab60-default-rtdb.firebaseio.com",
    projectId: "portfolio-5ab60",
    storageBucket: "portfolio-5ab60.appspot.com",
    messagingSenderId: "655980381774",
    appId: "1:655980381774:web:99d0648554a022026da51f",
    measurementId: "G-ED40NRC4VZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Send");

    //create a DB 
    //reference contact info collection
    let contactInfo = firebase.database().ref('infos')

    //save info to FB
    const saveContactInfo = (name, email, message) => {
        //create a ref 
        let newContactInfo = contactInfo.push()

        //push info to DB
        newContactInfo.set({
            name: name,
            email: email,
            message: message
        }) 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        saveContactInfo(details.name, details.email, details.message)
        setStatus("Send");
        setName("");
        setEmail("");
        setMessage("");
        alert('message sent!');
    };
    return (
        // <div class="formbox">
        <>
            <h1 style={{textAlign: "center", }}>Lets Connect!</h1>
            <h5 style={{textAlign: "center", fontSize:"15.8px", marginRight:"10px", marginLeft:"10px"}}>You can also reach me directly here as well: <span>thomas.coenen58@gmail.com</span>
            </h5>
            <form className="form" onSubmit={handleSubmit}>
                <div className="singlebox">
                    <label htmlFor="name"></label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        required 
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="singlebox">
                    <label htmlFor="email"></label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        required 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="singlebox">
                    <label htmlFor="message"></label>
                    <textarea 
                        className="contact__form__textarea"
                        type="text"
                        id="message" 
                        name="message"
                        rows="8" 
                        cols="35" 
                        required 
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className="submitcontactbutton" type="submit">{status}</button>
            </form>
        </>
    );
};
