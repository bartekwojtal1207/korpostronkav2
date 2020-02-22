import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {

    constructor(props) {
        super(props);

        this.navRef = React.createRef();

        this.state = {
            navIsSticky: false
        }
    }

    componentDidMount() {
        console.log(this.navRef.current)
        window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll (event) {
        // console.log('scroll')
        // console.log(this.childRef)
        // let scrollTop = event.srcElement.body.scrollTop;
        // console.log(scrollTop)
        //     itemTranslate = Math.min(0, scrollTop/3 - 60);
        //
        // this.setState({
        //     navIsSticky: true
        // });
    }

    render(props) {
        return (
         <>
             <div className={["header-img", this.props.headerClass].join(' ')}>
                 <Navbar ref={this.navRef}/>
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
