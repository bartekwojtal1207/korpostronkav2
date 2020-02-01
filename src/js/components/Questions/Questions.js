import React, {Component} from 'react';
import SectionTitle from "../UI/Titles/SectionTitle";
import data from './questions-data';

class Questions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [...data.questions]
        }
    }

    slideAnswer(id) {
        const list = [...this.state.questions];
        list.filter((el, index) => {
            if(parseInt(id) === index) {
                list[id].show = !this.state.questions[id].show; //toggle class
            }else if(parseInt(id) !== index) {
                list[index].show = false;
            }
        });

        this.setState({'questions': list})
    };

    render() {
        const questions = this.state.questions;

        const faqListItem = Object.keys(questions).map((value, index) => {
            return (<li className={['questionItem', questions[value].show ? 'open' : null].join(' ')} onClick={() => this.slideAnswer(value)} key={value}>
                <p className={'question'}>{questions[value].question}</p>
                <p className={'answer'}>{questions[value].answer}</p>
            </li>)
        });

        return (
            <section className={'questions'}>
                <header>
                    <div className={'container'}>
                        <SectionTitle>Pytania i odpowiedzi</SectionTitle>
                    </div>
                </header>
                <div className={'container'}>
                    <ul>
                        {faqListItem}
                    </ul>
                </div>
            </section>
        )
    }
};

export default Questions;
