import React from "react";
import Logo from '../Logo/Logo';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = React.forwardRef((props, ref) => {

    return (
        <nav ref={ref}>
            <div className='container'>
                <Logo />
                <BurgerMenu />
                <div>
                </div>
            </div>
        </nav>
    )
});

export default Navbar;