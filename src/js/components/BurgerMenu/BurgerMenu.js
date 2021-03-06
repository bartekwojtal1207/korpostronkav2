import React, { useState } from "react";
import MenuList from "../MenuList/MenuList";

const BurgerMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className={'burger-menu'}>
            <div className={['nav-icon', openMenu ? 'open' : null].join(' ')} onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <MenuList isOpen={openMenu}/>
        </div>
    )
};

export default BurgerMenu;