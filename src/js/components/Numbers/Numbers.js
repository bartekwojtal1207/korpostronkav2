import React from "react";
import './Numbers.css';
// import Logo from './numbers.jpg'
// import StylesApp from '../../hoc/Layout/Layout.module.scss'
import SectionTitle from "../UI/Titles/SectionTitle";
import NumberItems from "./NumberItems/NumberItems";

const Numbers = () => {
    //style={{'backgroundImage': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("")'}}
    return (
        <section className='numbers'>
            <div className={'container'}>
                <SectionTitle  otherStyle={{marginBottom: '50px'}} customClass={'White'}>
                    Najkrócej o <br/> Totalmoney.pl
                </SectionTitle>
                <NumberItems/>
            </div>
        </section>
    )
};

export default Numbers;
