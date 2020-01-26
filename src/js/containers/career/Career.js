import React, { Component } from 'react';
import BestEmployers from "../../components/BestEmployers/BestEmoloyers";
import OurAdvantages from "../../components/ourAdvantages/ourAdvantages";
import Recruitment from "../../components/Recruitment/Recruitment";
import JobsOffers from "../../components/JobsOffers/JobsOffers";
import FAQ from "../../components/FAQ/FAQ";


class Career extends Component {

    render () {
        return (
            <div>
                <BestEmployers/>
                <OurAdvantages/>
                <Recruitment/>
                <JobsOffers/>
                <FAQ/>
            </div>
        )
    }
}

export default Career;