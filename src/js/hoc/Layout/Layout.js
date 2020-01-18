import React, { Component } from 'react';
import styles from './Layout.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Logo from './header1.jpg';
import Header from "../../components/Header/Header";

class Layout extends Component {

    render() {
        return (
         <div>
             <div className={styles.HeaderImg}
                  style={{'backgroundImage': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("' + Logo + '")'}}>
                 <Navbar stylesApp={styles}/>
                 <Header stylesApp={styles}/>
             </div>
             <div>
                 {this.props.children}
             </div>
         </div>
        );
    }
}

export default Layout;
