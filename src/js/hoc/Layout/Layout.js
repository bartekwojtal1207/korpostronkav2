import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import Logo from './header1.jpg';
import Header from "../../components/Header/Header";

class Layout extends Component {
    //'backgroundImage': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("' + "" + '")'
    render() {
        return (
         <div>
             <div className={"header-img"}>
                 <Navbar/>
                 <Header/>
             </div>
             <div>
                 {this.props.children}
             </div>
         </div>
        );
    }
}

export default Layout;
