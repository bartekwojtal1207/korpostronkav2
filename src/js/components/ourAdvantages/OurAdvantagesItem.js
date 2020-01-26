import React from 'react';

const OurAdvantagesItem = (props) => {
    return (
        <div key={props.key} className={'our-advantages-item'} name={props.title}>
            {props.icon}
            <p className={'our-advantages-item-title'}>{props.title}</p>
            <p className={'our-advantages-item-description'}>
                <span className={'our-advantages-item-header'}>{props.title}</span>
                {props.description}
            </p>
        </div>
    )
};

export default OurAdvantagesItem;