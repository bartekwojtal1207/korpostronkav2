import React, {Component} from 'react';
import Input from "../UI/Inputs/Inputs";
import SectionTitle from "../UI/Titles/SectionTitle";
import ButtonLink from "../UI/Buttons/ButtonLink";

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
                        type: 'mail',
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
                />))}
                <input type="submit" value={"wyślij"} className={'button-link'}/>
            </form>
        );

        return (
            <div className={'container contact-form-section'}>
                <SectionTitle>Masz pytania ?</SectionTitle>
                {form}
            </div>
        )
    }
}

export default ContactForm;