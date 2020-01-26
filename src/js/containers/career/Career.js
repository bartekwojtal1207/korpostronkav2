import React, { Component } from 'react';
import BestEmployers from "../../components/BestEmployers/BestEmoloyers";
import OurAdvantages from "../../components/ourAdvantages/ourAdvantages";
import Recruitment from "../../components/Recruitment/Recruitment";


class Career extends Component {

    render () {
        return (
            <div>
                <BestEmployers/>
                <OurAdvantages/>
                <Recruitment/>
            </div>
        )
    }
}

export default Career;