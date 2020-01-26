import React from "react";
import SectionTitle from "../UI/Titles/SectionTitle";
import NumberItems from "./NumberItems/NumberItems";

const Numbers = () => {
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
