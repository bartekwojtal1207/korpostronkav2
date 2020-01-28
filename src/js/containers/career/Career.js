import React, { Component } from 'react';
import BestEmployers from "../../components/BestEmployers/BestEmoloyers";
import OurAdvantages from "../../components/ourAdvantages/ourAdvantages";
import Recruitment from "../../components/Recruitment/Recruitment";
import JobsOffers from "../../components/JobsOffers/JobsOffers";
import QAndA from "../../components/QandA/QandA";


class Career extends Component {

    render () {
        return (
            <div>
                <BestEmployers/>
                <OurAdvantages/>
                <Recruitment/>
                <JobsOffers/>
                <QAndA/>
            </div>
        )
    }
}

export default Career;