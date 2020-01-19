import React from "react";
// import Styles from './JobsOffers.module.scss';

const JobsOffersItem = (props) => {
    return (
        <li className={'jobs-offers-item'}>
            <a target={'_blank'} href={props.link}>
                <p className={'jobs-offers-item-title'}>{props.title}</p>
                <span className={'jobs-offers-item-description'}>{props.description}</span>
            </a>
            <div className={'jobs-offers-item-city'}>{props.city}</div>
            <a target={'_blank'} className={'jobs-offers-item-link'} href={props.link}>zobacz szczegóły</a>
        </li>
    )
};

export default JobsOffersItem;
