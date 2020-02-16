import React, {Component} from 'react';
import Input from "../UI/Inputs/Inputs";
import SectionTitle from "../UI/Titles/SectionTitle";
const axios = require('axios').default;
import ContactFormSuccessMessage from "./ContactFormSuccessMessage";

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
                        autocomplete: 'off',
                        required: 'true'
                    },
                    value: '',
                    label: 'Treść'
                },
                _csrf_token: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'hidden',
                        autocomplete: 'off'
                    }
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

    formSubmit(event) {
        event.preventDefault();
        const formData = {};
        for(let formElementId in this.state.contactForm) {
            console.log(formElementId)
            formData[formElementId] = this.state.contactForm[formElementId].value
        }

        const url = "https://firma.totalmoney.pl/kontakt/";
        axios.post(url, formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
            <form id={'contact'} className={'contact-form'} onSubmit={(event => this.formSubmit(event))}>
                <input type="hidden" name="_csrf_token" />
                {formElementsArray.map(formElement => (
                    <Input elementType={formElement.config.elementType}
                               elementConfig={formElement.config.elementConfig}
                               value={formElement.config.value}
                               label={formElement.config.label}
                               name={formElement.id}
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
                <ContactFormSuccessMessage />
            </div>
        )
    }
}

export default ContactForm;