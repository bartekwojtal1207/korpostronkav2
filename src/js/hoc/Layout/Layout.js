import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {

    constructor(props) {
        super(props);

        this.navRef = React.createRef();

        this.state = {
            navIsSticky: false,
        }
    }

    componentDidMount() {
        const navHeight = this.navRef.current.offsetHeight;
        window.addEventListener('scroll', (event) => this.checkNavIsSticky(event, navHeight));
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.checkNavIsSticky);
    }

    checkNavIsSticky (event, navHeight) {
        let windowYPosition = window.pageYOffset;
        let isSticky = windowYPosition > navHeight;
        isSticky ? this.navRef.current.classList.add('sticky') : this.navRef.current.classList.remove('sticky');
        this.setState({ navIsSticky: isSticky });
    }

    render(props) {

        return (
         <>
             <div className={ ["header-img", this.props.headerClass].join(' ') } >
                 <Navbar ref={ this.navRef } />
                 <Header headerClass={ this.props.headerClass } />
             </div>
             <div>
                 { this.props.children }
             </div>
             <Footer />
         </>
        );
    }
}

export default Layout;
