import React from 'react';

const Input = (props) => {

    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case 'textarea':
            inputElement = <textarea value={props.value} {...props.elementConfig} onChange={props.changed}/>;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }


    return (
        <div className={'form-control'}>
            <label htmlFor="">{props.label}</label>
            {inputElement}
        </div>

    )
}

export default Input;