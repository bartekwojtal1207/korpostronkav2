import React from 'react';
import line from './line.png';
import send from './send.svg';

const ContactFormSuccessMessage = () => {

    return (
        <div className={'form-success-message'}>
            <span className={'green-point'}>✓</span>
            <h6>Dziękujemy!</h6>
            <p>Twoja wiadomość została wysłana.</p>
            <div className={'line'}>
                <img src={line} alt="line"/>
                <img src={send} alt="send" className={'send'}/>
            </div>
        </div>
    )
};

export default ContactFormSuccessMessage;