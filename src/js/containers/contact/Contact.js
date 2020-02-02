import React, { Component } from 'react';
import ContactList from "../../components/Contact-list/Contact-list";
import SectionTitle from "../../components/UI/Titles/SectionTitle";

class Contact extends Component {

    render () {
        return (
            <div>
                <section className={'contact-section'}>
                    <div className={'container'}>
                        <SectionTitle>Skontaktuj się z nami</SectionTitle>
                        <p className={'contact-description'}>Wypełnij formularz lub zadzwoń. Odpowiemy najszybciej jak to możliwe.</p>
                    </div>

                    <ContactList/>

                    <div className={'container'}>
                        form
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact;