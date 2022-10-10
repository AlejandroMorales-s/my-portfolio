import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md'

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xjvzokdk");
    if (state.succeeded) {
        return (
            <div className='message-container success-message'>
                <AiFillCheckCircle className='message-icon' />
                <p>Your message has been send successfully! (:</p>
            </div>
        )
    }
    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            {state.errors[0] && 
                <div className='message-container error-message'>
                    <MdError className='message-icon'/>
                    <p>{state.errors[0].message}</p>
                </div>
            }
            <div className='contact-form-input-container'>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="name" 
                    name="name"
                />
            </div>
            <div className='contact-form-input-container'>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className='contact-form-input-container'>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}