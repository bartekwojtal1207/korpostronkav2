import React, {Component} from 'react';
import Input from "../UI/Inputs/Inputs";

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        autocomplete: 'off'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'e-mail',
                        autocomplete: 'off'
                    },
                    value: '',
                },
                message: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'text',
                        autocomplete: 'off'
                    },
                    value: ''
                }
            }
        }
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form id={'contact'} className={'contact-form'}>
                {formElementsArray.map(formElement => ( <Input elementType={formElement.config.elementType}
                               elementConfig={formElement.config.elementConfig}
                               value={formElement.config.value} />))}
            </form>
        );

        return (
            <div className={'container'}>
                <h3 className={'contact-form-title'}>Masz pytania ?</h3>
                {form}
            </div>
        )
    }
}

export default ContactForm;