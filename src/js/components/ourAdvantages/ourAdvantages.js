import React, {Component} from 'react';
import data from './ourAdvantages.json';
import Slider from "react-slick";
import {PozytywniLudzie,
    BenefityDlaPracownika,
    BrakDressCodu,
    GodzinyPracy,
    KursyISzkolenia,
    LiderWBranzy,
    NowoczesneBiuro,
    SpotkaniaIImprezyIntegracyjne,
    SwobodnaAtmosfera} from './icons/icons';
import OurAdvantagesItem from './OurAdvantagesItem';

class OurAdvantages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ourAdvantages: data.ourAdvantages,
            sliderSettings: {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                lazyLoad: 'progressive'
            }
        }
    }

    getIcon(currentSlide) {
        switch (currentSlide) {
            case 0:
                return <PozytywniLudzie/>;
            case 1:
                return <GodzinyPracy/>;
            case 2:
                return <KursyISzkolenia/>;
            case 3:
                return <NowoczesneBiuro/>;
            case 4:
                return <BrakDressCodu/>;
            case 5:
                return <SwobodnaAtmosfera/>;
            case 6:
                return <SpotkaniaIImprezyIntegracyjne/>;
            case 7:
                return <BenefityDlaPracownika/>;
            case 8:
                return <LiderWBranzy/>;
            default:
                return <PozytywniLudzie/>
        }
    }

    render() {
        const {ourAdvantages, sliderSettings} = this.state;
        const sliderItem = Object.keys(ourAdvantages).map((value, index) =>
            <OurAdvantagesItem icon={ this.getIcon(index)}
                        key={index}
                        name={ourAdvantages[value].title}
                        title={ourAdvantages[value].title}
                        description={ourAdvantages[value].description} />);
        return (
            <section className={'our-advantages'}>
                <div className={'container'}>
                    {/*<Slider {...sliderSettings}>*/}
                    {/*    {sliderItem}*/}
                    {/*</Slider>*/}
                    <div className={'our-advantages-list'}>
                            {sliderItem}
                    </div>
                </div>
            </section>
        )
    }
}

export default OurAdvantages;