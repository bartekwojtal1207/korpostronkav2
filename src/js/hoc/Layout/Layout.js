import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {

    render(props) {
        return (
         <>
             <div className={["header-img", this.props.headerClass].join(' ')}>
                 <Navbar/>
                 <Header headerClass={this.props.headerClass}/>
             </div>
             <div>
                 {this.props.children}
             </div>
             <Footer/>
         </>
        );
    }
}

export default Layout;
