import React, {Component} from "react";
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './teams.json';
import TeamsItems from "./TeamsItems";

import {Afiliacja,
    Analitycy,
    Handlowcy,
    DigitalAcquisition,
    HrIBackOffice,
    Marketing,
    ProjektyeCommerce,
    RozwojTechnologii,
    WsparcieSprzedazy} from "./icons/icons";

class Teams extends Component {
    constructor(props) {
        super(props);

        this.state = {
            teams: data.teams,
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
                return <Analitycy/>;
            case 1:
                return <WsparcieSprzedazy/>;
            case 2:
                return <Afiliacja/>;
            case 3:
                return <Handlowcy/>;
            case 4:
                return <Marketing/>;
            case 5:
                return <DigitalAcquisition/>;
            case 6:
                return <RozwojTechnologii/>;
            case 7:
                return <ProjektyeCommerce/>;
            case 8:
                return <HrIBackOffice/>;
            default:
                return <Analitycy/>
        }
    }

    render() {
        const {teams, sliderSettings} = this.state;

        const sliderItem = Object.keys(teams).map((value, index) =>
            <TeamsItems icon={ this.getIcon(index)}
                        key={index}
                        name={teams[value].title}
                        title={teams[value].title}
                        description={teams[value].description} />);

        return (
            <section className={'teams-section'}>
                <div className={'container'}>
                    <SectionTitle>Zespoły</SectionTitle>
                    {/*<Slider {...sliderSettings}>*/}
                    {/*    {sliderItem}*/}
                    {/*</Slider>*/}
                    <div className={'teams-section-list'}>
                        {sliderItem}
                    </div>
                </div>
            </section>
        )
    }
}

export default Teams;