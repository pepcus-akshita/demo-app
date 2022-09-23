import React from "react";
import About from "./Components/About";
import './Navbar.css';
import {
    BrowserRouter as Router,
    Link,
    Route, Switch
} from "react-router-dom";

import DemoApp from "./Components/DemoApp";
import Navbar from "./Navbar";
import Test from "./Components/FunctionComp";
// import MyClass from "./Classcomp.js" ;
import Tick from "./Components/MyClock";
import MyClock from "./Components/MyClock";


function App() {
    return (
<Router>
    <Navbar />
    {/*<link to="/" />*/}
    <ul>

        <li>
            {/*<img src={"/reactlogo.svg"} style={{width: "5px" , height: "8px"}}/>*/}
            <Link to="/Demoapp">DemoApp</Link>
            {/*<Link to="/">DemoApp</Link>*/}
        </li>

        <li>
             <Link to="/about"> About </Link>
        </li>
        <li>
            <Link to="/functionComp">FunctionComp</Link>
        </li>
        <li>
            <Link to="/Myclock">MyClock</Link>
        </li>
    </ul>


    <Switch>
        {/*<Route path='/' component={DemoApp} />*/}

            <Route path='/Demoapp' component={DemoApp} />

            <Route path='/about' component={About} />

<Route path='/functionComp' component={Test} />

        <Route path='/Myclock' component={MyClock} />

        </Switch>
</Router>
    );
}
export default App;





//
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router,
//     Routes,
//     Route } from "react-router-dom";
//
// export default function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<DemoApp />}>
//                     <Route  element={<About />} />
//                     {/*<Route path="blogs" element={} />} />*/}
//                     {/*<Route path="contact" element={<Contact />} />*/}
//                     {/*<Route path="*" element={<NoPage />} />*/}
//                 </Route>
//             </Routes>
//         </Router>
//     );
// }
