import React from "react";
// import Styles from "./ButtonLink.module.scss";

const ButtonLink = (props) => {

    return (
        <a role="button"
           onClick={props.click}
           className={['button-link', props.customClass === 'BlueButton' ? 'button-link--blue' : null].join(' ')}
           style={props.otherStyle}
           href={props.link}>{props.children}</a>
    )
};

export default ButtonLink;