import React from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './faq';

const FAQ = () => {
    const faq = data.faq;
    //   name={teams[value].title}
    const faqListItem = Object.keys(faq).map((value, index) => {

    });

    return (
        <section className={'faq'}>
            <header>
                <div className={'container'}>
                    <SectionTitle>Pytania i odpowiedzi</SectionTitle>
                </div>
            </header>
            <div className={'container'}>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        </section>
    )
};

export default FAQ;
