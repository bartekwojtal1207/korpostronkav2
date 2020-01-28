import React from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './questions';

const QAndA = () => {
    const qAndA = data.qAndA;
    //   name={teams[value].title}
    const faqListItem = Object.keys(qAndA).map((value, index) => {

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
                    <li>
                        <span className={'icon'}>+</span>
                        <p className={'question'}>
                            dsadasdadadasdasdadsadasdadasd
                        </p>
                    </li>
                    <li>
                        <span className={'icon'}>+</span>
                        <p className={'question'}>
                            dsadasdadadasdasdadsadasdadasd
                        </p>
                    </li>
                    <li>
                        <span className={'icon'}>+</span>
                        <p className={'question'}>
                            dsadasdadadasdasdadsadasdadasd
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
};

export default QAndA;
