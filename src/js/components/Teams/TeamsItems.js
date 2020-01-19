import React from 'react';
// import Style from './Teams.module.scss';

const TeamsItems = (props) => {
    return (
        <div key={props.key} className={'teams-item'} name={props.title}>
            {props.icon}
            <p className={'teams-item-title'}>{props.title}</p>
            <p className={'teams-item-description'}>
                <span className={'teams-item-header'}>{props.title}</span>
                {props.description}
            </p>
        </div>
    )
};

export default TeamsItems;
