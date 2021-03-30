//deploy to Firebase:
//sudo npm i -g firebase tools (shouldnt need to do this since puter has it)
//firebase logout
//firebase login
//firebase init  ->> select hosting, type: -build- for public directory
//npm run build -> creates optimized production build
//firebase deploy  -->> UPloads ur project 

import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Homescreen from './components/Homescreen';
import Contact from './components/Contact';
import proj1img from './images/logo6.png';
import Blog from './Blog';
import ReactScrollableFeed from 'react-scrollable-feed'

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">

        <div className="header-wrap">
          <div className="headerleft">
            <Link to="/"><img src={proj1img} alt="hi"/></Link>
          </div>
          <ul id="headerright">
            <li className="nav-list"><Link to="/" className="nav-list">Home</Link></li>
            <li className="nav-list"><Link to="/about">About</Link></li>
            <li className="nav-list"><a href="/">Work</a></li>
            <li className="nav-list"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="content">
          <Route path="/blog" component={Blog}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/" component={Homescreen} exact></Route>
          <Footer/>
          <br/>
        </div>
      </div>
  </BrowserRouter>

  );
}

export default App;

//https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
//npm init react-app app_name (create your app)
//npm install gh-pages --save-dev
//create repo on GH. Use same name what u called project
//git init
// git remote add origin https://github.com/ThomasCoenen/portfolio.git
//git push -u origin master
//npm run deploy





// git add .
//git commit -m "first commit"

//npm run deploy
//git push -u origin master
