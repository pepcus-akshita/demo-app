import React from "react";
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link} from "react-router-dom";
import './Navbar.css' ;

// import logo from './logo.svg';

// import DemoApp from "./Components/DemoApp";
// import About from "./Components/About";


export default function Navbar()
{
    return(

    <div>
        <nav>
             <h5 style={{textAlign: 'center'}}>Welcome to my React Demo Application</h5>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        /!*<img src={"/reactlogo.svg"} style={{width: "5px" , height: "8px"}}/>*!/*/}
            {/*        DemoApp/!*<Link to="/">DemoApp</Link>*!/*/}
            {/*    </li>*/}

            {/*    <li>*/}
            {/*       About /!*<Link to="/about"> About </Link>*!/*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        Second Component/!*<Link to="/second-comp">SecondComp</Link>*!/*/}
            {/*    </li>*/}
            {/*</ul>*/}

        </nav>

    </div>

);
}