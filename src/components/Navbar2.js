import React,{Component} from "react"
import logo from "../images/Vector.png";

//class Navbar2 extends React.Component {}
class Navbar2 extends Component {
    render(){
        return(
            <nav className="nav">
            <img src={logo} className="nav-logo"  alt="airbnb-logo"/>
            </nav>
        );
    }
        
}     
    



export default Navbar2;