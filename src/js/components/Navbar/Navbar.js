import React from "react";
import Logo from '../Logo/Logo';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

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