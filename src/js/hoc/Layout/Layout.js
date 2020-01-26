import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";

class Layout extends Component {

    render(props) {
        return (
         <div>
             <div className={["header-img", this.props.headerClass].join(' ')}>
                 <Navbar/>
                 <Header headerClass={this.props.headerClass}/>
             </div>
             <div>
                 {this.props.children}
             </div>
         </div>
        );
    }
}

export default Layout;
