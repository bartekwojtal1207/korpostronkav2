import React, {Component} from "react";
import SectionTitle from "../UI/Titles/SectionTitle";
import ButtonLink from "../UI/Buttons/ButtonLink";
import img from './whatWeDo.jpg';
import img1 from './totalmoney-3-min2.kraken.jpg';
import img2 from './totalmoney-4-min2.kraken.jpg';
import img3 from './totalmoney-4-new-ostre.jpg';

class WhatWeDo extends Component {
    constructor() {
        super();
        this.state = {
            setShowMobileText: false,
            mobile: false,
            tablet: false,
            desktop: false
        }
    }

    componentDidMount() {
        this.checkWidth = () => {
            const md = window.matchMedia('(min-width: 768px)');
            const sm = window.matchMedia('(max-width: 540px)');
            const xl = window.matchMedia('(min-width: 1200px)');

            if(sm.matches) this.setState({mobile: true});
            if(md.matches) this.setState({tablet: true, showMobileText: true});
            if(xl.matches) this.setState({desktop: true});
        };

        this.checkWidth();
    }

    render() {
        return (
            <section className={'what-we-do'}>
                <div className={['container', 'what-we-do-content'].join(' ')}>
                    <div>
                        <SectionTitle>Co robimy?</SectionTitle>
                        <p>Totalmoney.pl to internetowa porównywarka kredytów, kont i
                            lokat. Ponad 10 lat ciężko pracowaliśmy, aby dziś móc się pochwalić - jesteśmy największym
                            serwisem e-commerce finansowego w Polsce.
                            { (this.state.showMobileText) ? <span>Jesteśmy częścią WP Holding, co umożliwia nam wymianę informacji, wiedzy i know-how z liderem rynku wśród grup medialnych, ale wciąż podkreślamy swoją niezależność i fakt, że nie jesteśmy korporacją.</span> : null }
                        </p>
                    </div>
                    <ButtonLink click={() => this.setState({showMobileText: !this.state.showMobileText})} otherStyle={{marginBottom: '15px'}} customClass={'BlueButton'}>Czytaj więcej</ButtonLink>
                    <div className={'gallery'}>
                        <div>
                            {this.state.mobile === false &&
                            this.state.tablet === true &&
                            this.state.desktop === true && <img src={img} alt="zdjęcie"/> }
                            {this.state.tablet === true && <img src={img1} alt="zdjęcie 1"/>}
                            {this.state.tablet === true && <img src={img2} alt="zdjęcie 2" />}
                        </div>
                        {this.state.desktop === true && <img src={img3} className={'img3'} alt="zdjęcie 2" />}
                    </div>
                </div>
            </section>
        )
    }
};

export default WhatWeDo;