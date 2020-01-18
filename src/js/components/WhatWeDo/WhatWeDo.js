import React, {useState, Component} from "react";
import SectionTitle from "../UI/Titles/SectionTitle";
// import StylesApp from '../../hoc/Layout/Layout.module.scss'
// import Styles from './WhatWeDo.module.scss';
import ButtonLink from "../UI/Buttons/ButtonLink";
import img from './whatWeDo.jpg';

class WhatWeDo extends Component {
    constructor() {
        super();
        // const [showMobileText, setShowMobileText] = useState(false);
        this.state = {
            showMobileText: false
        }
    }

    componentDidMount() {
        this.checkWidth = () => {
            const md = window.matchMedia('(min-width: 768px)');
            if(md.matches) {
                this.setState({showMobileText: true})
            }
        };
        this.checkWidth();
    }

    render() {
        return (
            <section className={'what-we-do'}>
                <div className={['container', 'what-we-do-content'].join(' ')}>
                    <SectionTitle>Co robimy?</SectionTitle>
                    <p>Totalmoney.pl to internetowa porównywarka kredytów, kont i
                        lokat. Ponad 10 lat ciężko pracowaliśmy, aby dziś móc się pochwalić - jesteśmy największym
                        serwisem e-commerce finansowego w Polsce.
                        { (this.state.showMobileText) ? <span>Jesteśmy częścią WP Holding, co umożliwia nam wymianę informacji, wiedzy i know-how z liderem rynku wśród grup medialnych, ale wciąż podkreślamy swoją niezależność i fakt, że nie jesteśmy korporacją.</span> : null }
                    </p>
                    <ButtonLink click={() => this.setState({showMobileText: !this.state.showMobileText})} otherStyle={{marginBottom: '15px'}} customClass={'BlueButton'}>Czytaj więcej</ButtonLink>
                    <img src={img} alt="zdjęcie"/>
                </div>
            </section>
        )
    }


};

export default WhatWeDo;