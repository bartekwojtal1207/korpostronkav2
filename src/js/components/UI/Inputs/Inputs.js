import React from 'react';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} value={props.value}/>;
            break;
        case 'textarea':
            inputElement = <textarea value={props.value} {...props.elementConfig}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value}/>;
    }


    return (
        <div>
            <label htmlFor="">{props.label}</label>
            {inputElement}
        </div>

    )
}

export default Input;