import React, { Component } from 'react'
import './ContactForm.css'
import { Animated } from "react-animated-css";
import axios from 'axios'


class ContactForm extends Component {

    state= {
        contactForm: {
            name: 'Tylor',
            email: 'tylor@gmail.com',
            message: 'Test Message',
        },
        formIsValid: false,
        validEmail: '',
        validName: '',
        validMessage: ''
    }

    updateFormHandler = (e, el) => {
        let contactData = {
            ...this.state.contactForm
        }

        contactData[el] = e.target.value

        this.setState({contactForm: contactData})
    }

    validate(e, value, rules) {
        e.preventDefault()
        // return true or false wether it is valid or not
        let isValid = true
        let contactDataKeys = Object.keys(this.state.contactForm)

        contactDataKeys.forEach((key) => {
            let formEl = this.state.contactForm[key]
            isValid = formEl.trim() !== '' && isValid
            isValid = formEl.length >= 3 && isValid

            if (key === 'name') {
                isValid = formEl.trim() !== '' && isValid
                isValid = formEl.length >= 3 && isValid
                this.setState({validName: isValid})
            }

            if (key === 'message') {
                isValid = formEl.trim() !== '' && isValid
                isValid = formEl.length >= 3 && isValid
                this.setState({validMessage: isValid})
            }

            if (key === 'email') {
                let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                isValid = formEl.match(emailRegex) ? true : false
                this.setState({validEmail: isValid})
            }
        })
        this.setState({formIsValid:isValid})

        if (isValid) {
            this.submitFormHandler()
        }

    }

    submitFormHandler = () => {
        console.log('FINAL FORM', this.state.contactForm)
        let formData = new FormData()
        for (let data in this.state.contactForm) {
            formData.append('test', this.state.contactForm[data])
        }
        axios.post('/contact/message', formData)
    }

    render() {
        return (
            <Animated animationIn="slideInLeft" isVisible={true}>
                <div className="ContactForm__container">
                    <div style={{textAlign: 'center'}}>
                        <h2>Contact</h2>

                        <form className="ContactForm__form">
                            <p className="ContactrForm__text">If you would like to get in touch please send me a message and I will get back to you!</p>
                            
                            <label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className={this.state.validName === false ? 'form-error' : ''} 
                                    placeholder="Full Name" 
                                    value={this.state.contactForm.name} 
                                    onChange={(e) => this.updateFormHandler(e, 'name')}/>
                            </label>

                            <label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    className={this.state.validEmail === false ? 'form-error' : ''} 
                                    placeholder="Email" 
                                    value={this.state.contactForm.email}
                                    onChange={(e) => this.updateFormHandler(e, 'email')}/>
                            </label>

                            <label>
                                <textarea 
                                    type="textarea" 
                                    name="message" 
                                    className={this.state.validMessage === false ? 'form-error' : ''} 
                                    placeholder="Message" 
                                    value={this.state.contactForm.message}
                                    onChange={(e) => this.updateFormHandler(e, 'message')}></textarea>
                            </label>


                            <input type="submit" value="Send!" disabled={this.state.isValid} onClick={(e) => this.validate(e)}/>
                        </form>

                    </div>
                </div>
            </Animated>
        )
    }
}

export default ContactForm