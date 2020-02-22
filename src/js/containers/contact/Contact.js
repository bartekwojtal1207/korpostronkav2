import React, { Component } from 'react';
import ContactList from "../../components/Contact-list/Contact-list";
import SectionTitle from "../../components/UI/Titles/SectionTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactMaps from "../../components/ContactMaps/ContactMaps";
import CompanyData from "../../components/CompanyData/CompanyData";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            setShowMobileText: false,
            mobile: false,
            tablet: false,
            desktop: false
        }
    }

    componentDidMount() {
        this.checkWidth = () => {
            const md = window.matchMedia('(min-width: 768px)');
            const sm = window.matchMedia('(max-width: 540px)');
            const xl = window.matchMedia('(min-width: 1200px)');

            if(sm.matches) this.setState({mobile: true});
            if(md.matches) this.setState({tablet: true, showMobileText: true});
            if(xl.matches) this.setState({desktop: true});
        };

        this.checkWidth();
    }

    render () {
        return (
            <div>
                <section className={'contact-section'} id={'contactSection'}>
                    <div className={'container'}>
                        <SectionTitle>Skontaktuj się z nami</SectionTitle>
                        {this.state.mobile === true &&
                        this.state.tablet === true &&
                        this.state.desktop === false && <p className={'contact-description'}>Wypełnij formularz lub zadzwoń. Odpowiemy najszybciej jak to możliwe.</p>}

                        {this.state.desktop === true && <p className={'contact-description'}>Masz pomysł na artykuł? Chcesz poprosić o kolejny raport, a może potrzebujesz pomocy w wyborze właściwego produktu finansowego? Możesz też zgłosić nam jakiś dostrzeżony przez siebie błąd czy chęć współpracy - skorzystaj z formularza kontaktowego dostępnego poniżej.</p>}
                    </div>
                    <div className={'container no-mobile-padding'}>
                        <ContactList/>
                        <ContactForm/>
                    </div>
                </section>
                <CompanyData/>
                <ContactMaps/>
            </div>
        )
    }
}

export default Contact;