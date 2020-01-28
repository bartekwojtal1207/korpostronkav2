import React from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './questions';

const QAndA = () => {
    const qAndA = data.qAndA;
    const faqListItem = Object.keys(qAndA).map((value, index) => {
            return (<li key={index}>
                <span className={'icon'}>+</span>
                <p className={'question'}>{qAndA[value].question}</p>
                <p className={'answer'}>{qAndA[value].answer}</p>
            </li>)
    });

    return (
        <section className={'QAndA'}>
            <header>
                <div className={'container'}>
                    <SectionTitle>Pytania i odpowiedzi</SectionTitle>
                </div>
            </header>
            <div className={'container'}>
                <ul>
                    {faqListItem}
                </ul>
            </div>
        </section>
    )
};

export default QAndA;
