import React from 'react';
import justyna from './justyna.png';
import liwiusz from './liwiusz.png';
import maciek from './maciek.png';
import piotrek from './piotrek.png';


const ContactList = () => {

    return (
        <div>
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
                    <p className={'name'}><strong>Maciej Stanik</strong></p>
                    <p>Lider zespołu handlowego</p>
                    <p>maciej.stanik@totalmoney.pl</p>
                    <img src={maciek} alt="maciek"/>
                </li>
                <li>
                    <p className={'name'}><strong>Justyna Popiela</strong></p>
                    <p>Key Account Manager</p>
                    <p>justyna.popiela@totalmoney.pl</p>
                    <img src={justyna} alt="justyna"/>
                </li>
                <li>
                    <p className={'name'}><strong>Piotr Wojciechowski</strong></p>
                    <p>Key Account Manager</p>
                    <p>piotr.wojciechowski@totalmoney.pl</p>
                    <img src={piotrek} alt="piotrek"/>
                </li>
                <li>
                    <p className={'name'}><strong>Liwiusz Głuc</strong></p>
                    <p>Key Account Manager</p>
                    <p>liwiusz.gluc@totalmoney.pl</p>
                    <img src={liwiusz} alt="liwiusz"/>
                </li>
            </ul>
        </div>
    )
};

export default ContactList;