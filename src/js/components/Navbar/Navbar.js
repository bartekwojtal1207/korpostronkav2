import React from "react";
import Logo from '../Logo/Logo';
import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import styles from './Navbar.module.scss';

const Navbar = (props) => {

    return (
        <nav>
            <div className='container'>
                <Logo />
                <BurgerMenu />
                <div>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;