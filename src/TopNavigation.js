import 'bootstrap/dist/css/bootstrap.min.css'
//import $ from 'jquery'
//import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './TopNavigation.css';
import {Link, NavLink} from "react-router-dom";
//import Welcome from './Welcome';
//import Home from "./Home";
//import App from './App.js';
/*
Top navigation components
*/

function TopNavigation(props){
    return (
        <ul className="top-nav navbar navbar-expand-lg">
            <li><NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive? "#808080" : ""}}}>Home</NavLink></li>
            <li><NavLink to="/news" style={({isActive})=>{return {backgroundColor: isActive? "#808080" : ""}}}>News</NavLink></li>
            <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor: isActive? "#808080" : ""}}}>Contact</NavLink></li>
        </ul>
        /*<nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="nav-link selected" href="" title="Home">Home</Link>
            <div className="collapse navbar-collapse"  id="divCollapsible">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link to="/news" className="nav-link " href="" title="News" style={{color:"white"}}>News</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link " href="" style={{color:"white"}}>Contact</Link></li>
                </ul>
            </div>
            
        </nav>*/
         
        
        
        
    )
}

export default TopNavigation;