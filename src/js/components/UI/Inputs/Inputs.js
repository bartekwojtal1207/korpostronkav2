import React from 'react';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} name={props.name} />;
            break;
        case 'textarea':
            inputElement = <textarea value={props.value} {...props.elementConfig} onChange={props.changed} name={props.name} />;
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} name={props.name} onChange={props.changed}/>;
    }

    return (
        <div className={'form-control'}>
            <label htmlFor={props.name}>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default Input;