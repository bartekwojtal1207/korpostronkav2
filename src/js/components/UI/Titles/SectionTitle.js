import React from "react";
// import Styles from './Title.module.scss';

const SectionTitle = (props) => {
    return (
        <h3  style={props.otherStyle} className={['section-title', props.customClass === 'White' ? 'section-title-white' : null].join(' ')}>
            {props.children}
        </h3>
    )
};

export default SectionTitle;