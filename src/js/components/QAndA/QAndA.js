import React, {Component} from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './questions';

class QAndA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            qAnda: [...data.qAndA]
        }

    }

     slideAnswer(index) {
        console.log(index)
    };

    render() {
        const qAndA = this.state.qAnda;
        console.log(qAndA)

        // const faqListItem = Object.keys(qAndA).map((value, index) => {
        //     return (<li className={['questionItem', qAndA[value].show ? 'open' : null].join(' ')} onClick={() => this.slideAnswer(value)} key={value}>
        //         <span className={'icon'}>+</span>
        //         <p className={'question'}>{qAndA[value].question}</p>
        //         <p className={'answer'}>{qAndA[value].answer}</p>
        //     </li>)
        // });

        return (
            <section className={'QAndA'}>
                <header>
                    <div className={'container'}>
                        <SectionTitle>Pytania i odpowiedzi</SectionTitle>
                    </div>
                </header>
                <div className={'container'}>
                    <ul>
                        {/*{faqListItem}*/}
                    </ul>
                </div>
            </section>
        )
    }
};

export default QAndA;
