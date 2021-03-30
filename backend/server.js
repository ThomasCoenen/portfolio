const express = require('express');
const app = express();
require('dotenv').config()

const uuid = require("uuid");
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

//middleware
//since passing on JSON values to handle these
app.use(express.json());
//FS library to read different files
const fs = require('fs')

const stripeSecretKey = process.env.USER_EMAIL
const stripePublicKey = process.env.USER_PASSWORD

//set the view engine for ur app. allows u to embed server side code in ur frontend 
//2nd paramd: what u want to set it to(we downloaded EJS for this)
app.set('view engine', 'ejs')

//tell ur app where these public frontend facing files are. so all files in the 
//client folder will be static and will be available on frontend
app.use(express.static('backend'))

//middlewares:
app.use(express.json()); //since passing on JSON values to handle these
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
    res.send("It worksssss")
})

router.post("/contact", (req, res) => {
    const name = req.body.name; 
    const email = req.body.email;
    const message = req.body.message; 
    // console.log(name)
    // console.log(email)
    const mail = {
      from: name,
      to: "***************@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

const PORT = process.env.PORT || 3002;

app.listen(3002, () => console.log(`Server Running at port: ${PORT}`));