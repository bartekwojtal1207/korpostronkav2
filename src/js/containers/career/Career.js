import React, { Component } from 'react';
import BestEmployers from "../../components/BestEmployers/BestEmoloyers";
import OurAdvantages from "../../components/ourAdvantages/ourAdvantages";
import Recruitment from "../../components/Recruitment/Recruitment";
import JobsOffers from "../../components/JobsOffers/JobsOffers";
import Questions from "../../components/Questions/Questions";


class Career extends Component {

    render () {
        return (
            <div>
                <BestEmployers/>
                <OurAdvantages/>
                <Recruitment/>
                <JobsOffers/>
                <Questions/>
            </div>
        )
    }
}

export default Career;