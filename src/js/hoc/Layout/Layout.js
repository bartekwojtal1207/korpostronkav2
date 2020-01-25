import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";

class Layout extends Component {

    render() {
        return (
         <div>
             <div className={"header-img"}>
                 <Navbar/>
                 <Header headerClass={'career'}/>
             </div>
             <div>
                 {this.props.children}
             </div>
         </div>
        );
    }
}

export default Layout;
