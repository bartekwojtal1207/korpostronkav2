import React from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './recruitment-steps.json';

const Recruitment = () => {
    const steps = data.steps;
    const stepsItem = Object.keys(steps).map((value, index) => {
        return ( <div className={'recruitment-item'}>
            <div>
                <span className={'icon'}></span>
                <p className={'recruitment-item-title'}>{steps[value].title}</p>
            </div>
            <p className={'recruitment-item-description'}>{steps[value].description}</p>
        </div> )
    });

    return (
        <section className={'recruitment'}>
            <div className={'container'}>
                <SectionTitle>Rekrutacja</SectionTitle>
                <div className={'recruitment-list'}>
                   {stepsItem}
                </div>
            </div>
        </section>
    )
};

export default Recruitment;