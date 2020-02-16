import React, {Component} from 'react';
import Input from "../UI/Inputs/Inputs";
import SectionTitle from "../UI/Titles/SectionTitle";

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contactForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        autocomplete: 'off',
                        required: 'true'
                    },
                    value: '',
                    label: 'Imię i nazwisko',
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        autocomplete: 'off',
                        required: 'true'
                    },
                    value: '',
                    label: 'E-mail'
                },
                message: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'text',
                        autocomplete: 'off',
                        required: 'true'
                    },
                    value: '',
                    label: 'Treść'
                }
            }
        }
    }

    inputChangedHandler(event, inputId) {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = {
            ...updatedContactForm[inputId]
        };
        updatedFormElement.value = event.target.value;
        updatedContactForm[inputId] = updatedFormElement;
        this.setState({contactForm: updatedContactForm});
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
                               value={formElement.config.value}
                               label={formElement.config.label}
                               changed={(event) => this.inputChangedHandler(event, formElement.id)}
                />))}
                <input type="submit" value={"wyślij"} className={'button-link'}/>
            </form>
        );

        return (
            <div className={'contact-form-container'}>
                <div className={'contact-form-section'}>
                    <SectionTitle>Masz pytania ?</SectionTitle>
                    {form}
                </div>
            </div>
        )
    }
}

export default ContactForm;