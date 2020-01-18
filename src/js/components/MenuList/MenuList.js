import React from "react";
// import Styles from './MenuList.module.scss';

const MenuList = (props) => {

    return (
        <div className={'menu-list-wrapper'}>
            <ul className={['menu-list', props.isOpen ? 'open' : null].join(' ') }>
                <li>
                    <a href="">o firmie</a>
                </li>
                <li>
                    <a href="">kariera</a>
                </li>
                <li>
                    <a href="">kontakt</a>
                </li>
            </ul>
        </div>
    )
};

export default MenuList;