import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { MdError } from "react-icons/md";

export default function ContactForm({ onClose }) {
  const [state, handleSubmit] = useForm("contactForm");
  if (state.succeeded) {
    return (
      <div className="message-container success-message">
        <AiFillCheckCircle className="message-icon" />
        <p>Your message has been send successfully! (:</p>
      </div>
    );
  }
  return (
    <div className="contact-form-container">
      <AiOutlineClose onClick={onClose} className="close-icon" />
      <h2 className="h2">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {state.errors[0] && (
          <div className="message-container error-message">
            <MdError className="message-icon" />
            <p>{state.errors[0].message}</p>
          </div>
        )}
        <div className="contact-form-input-container">
          <label htmlFor="name">
            Name
            <input id="name" type="name" name="name" />
          </label>
        </div>
        <div className="contact-form-input-container">
          <label htmlFor="email">
            Email Address
            <input id="email" type="email" name="email" />
          </label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="contact-form-input-container">
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" />
          </label>
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
    </div>
  );
}
