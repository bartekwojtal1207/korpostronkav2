import React, { Component } from 'react';
import BestEmployers from "../../components/BestEmployers/BestEmoloyers";
import OurAdvantages from "../../components/ourAdvantages/ourAdvantages";


class Career extends Component {

    render () {
        return (
            <div>
                <BestEmployers/>
                <OurAdvantages/>
            </div>
        )
    }
}

export default Career;