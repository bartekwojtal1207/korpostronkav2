import React from 'react';


const ContactList = () => {

    return (
        <div className={'container'}>
            <h3 className={'contact-list-title'}>Napisz do nas</h3>
            <ul className={'contact-list'}>
                <li>
                    <strong>Biuro obsługi klienta</strong>
                    <p>bok@totalmoney.pl</p>
                </li>
                <li>
                    <strong>Program Partnerski M2M</strong>
                    <p>wydawca@totalmoney.pl</p>
                </li>
                <li>
                    <p>Lider zespołu handlowego</p>
                    <p>maciej.stanik@totalmoney.pl</p>
                </li>
                <li>
                    <p>Key Account Manager</p>
                    <p>justyna.popiela@totalmoney.pl</p>
                </li>
                <li>
                    <p>Key Account Manager</p>
                    <p>piotr.wojciechowski@totalmoney.pl</p>
                </li>
                <li>
                    <p>Key Account Manager</p>
                    <p>liwiusz.gluc@totalmoney.pl</p>
                </li>
            </ul>
        </div>
    )
};

export default ContactList;