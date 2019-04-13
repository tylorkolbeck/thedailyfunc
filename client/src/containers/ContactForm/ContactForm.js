import React, { Component } from 'react'
import './ContactForm.css'
import { Animated } from "react-animated-css";
import { axiosInstance as axios } from '../../axios-config'

import BackArrow from '../../components/BackArrow/BackArrow'


class ContactForm extends Component {

    state= {
        contactForm: {
            name: '',
            email: '',
            message: '',
        },
        formIsValid: false,
        validEmail: '',
        validName: '',
        validMessage: '',
        formSubmitted: false,
        submittedError: false
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
            // isValid = formEl.trim() !== '' && isValid
            // isValid = formEl.length >= 3 && isValid

            if (key === 'name') {
                isValid = formEl.trim() !== '' && isValid
                isValid = formEl.length >= 3 && isValid
                this.setState({validName: isValid})
            }

            if (key === 'message') {
                console.log('BEFORE IS VALID', isValid)
                // isValid = formEl.trim() !== '' && isValid
                isValid = formEl.length >= 3 && isValid
                this.setState({validMessage: isValid}, console.log('Valid Message:', this.state.validMessage))
            }

            if (key === 'email') {
                let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
        this.setState({formSubmitted: true, submittedError: false})
        let formData = {...this.state.contactForm}
        axios.post('/contact/message', formData)
            .then((res) => {
                if (res.status === 201) {
                    // console.log('message sent as: ', formData)
                    console.log(this.state)
                } else {
                    this.setState({submittedError: true})
                    window.scrollTo(0, 0)
                }
            })
            .catch((err) => {
                this.setState({submittedError: true}
                )}
            )
            window.scrollTo(0, 0)
            
    }

    render() {
        let form

        if (!this.state.formSubmitted && !this.state.submittedError) {
            form = (
                    <div className="ContactForm__container">
                    <div style={{textAlign: 'center'}}>
                        <h2 className="headerTxt-h2 ">Contact</h2>

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
            )
        } else if (this.state.formSubmitted && !this.state.submittedError) {
            form = (
                <h2 className="ContactForm-msg-success">Your Message has been sent!</h2>
            )
        } else if (this.state.formSubmitted && this.state.submittedError) {
            form = (
                <h2 className="ContactForm-msg-success">Unfortunately there was an error sending your message.  Please refresh and try again or email me directly</h2>
            )
        }

        return (
            <Animated animationIn="slideInLeft" isVisible={true}>
                <button onClick={this.props.history.goBack} className="FullPost__back_button" style={{marginTop: '20px'}}> 
                    <BackArrow className="desktop" style={{marginLeft: '18px'}}/>
                </button>
                {form}
            </Animated>
        )
    }
}

export default ContactForm