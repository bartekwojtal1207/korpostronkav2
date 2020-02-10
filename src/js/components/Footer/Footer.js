import React from 'react';
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterAddress from "../FooterAddress/FooterAddress";

const Footer = () => {

    return (
        <footer>
            <div className={'container'}>
                <SocialMediaLinks/>
                <FooterLinks/>
                <FooterAddress/>
            </div>
            <div className={'copyright'}>
                <div className={'container'}>
                    <p>2008-2019 Totalmoney.pl. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;