import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false); // this is to only start showing errors when a form after fails the validation test
  // I didn't find a convenient way to integrate ReCAPTCHA into Formik without rewriting everything, so for now it is "separate"
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const initialValues = {
    email: "",
    emailValidation: "",
    name: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .max(100)
      .required("Please provide your email"),
    emailValidation: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails must match")
      .required("Please confirm your email"),
    name: Yup.string().max(100).required("Please provide your name"),
    message: Yup.string().max(500).required("Please enter a message"),
  });

  async function onSubmit(data) {
    if (!recaptchaToken) {
      alert(`Please click "I'm not a robot"`);
      return;
    }
    data["recaptchaToken"] = recaptchaToken; // attach the recaptchaToken to the rest of the Formik data

    await axios
      .post(process.env.REACT_APP_email_endpoint, data)
      .then((response) => {
        alert(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log('error here');
        console.log(error);
        alert(error);
      });
  }

  return (
    <div id="contact" className="section anchor-point">
      <h2>Contact</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={formSubmitted}
        validateOnBlur={formSubmitted}
      >
        <Form className="form-container">
          <div className="field-container">
            <label htmlFor="inputEmail">Email</label>
            <Field autoComplete="off" id="inputEmail" name="email" />
            <ErrorMessage
              id="email-error"
              name="email"
              component="span"
              style={{ color: "red", position: "absolute" }}
            />
          </div>
          <div className="field-container">
            <label htmlFor="inputEmailValidation">Confirm Email</label>
            <Field
              autoComplete="off"
              id="inputEmailValidation"
              name="emailValidation"
            />
            <ErrorMessage
              id="email-validation-error"
              name="emailValidation"
              component="span"
              style={{ color: "red", position: "absolute" }}
            />
          </div>
          <div className="field-container">
            <label htmlFor="inputName">Name</label>
            <Field autoComplete="off" id="inputName" name="name" />
            <ErrorMessage
              id="name-error"
              name="name"
              component="span"
              style={{ color: "red", position: "absolute" }}
            />
          </div>
          <div className="field-container">
            <label htmlFor="inputMessage">Message</label>
            <Field
              autoComplete="off"
              id="inputMessage"
              name="message"
              placeholder="(up to 500 characters)"
              as="textarea"
            />
            <ErrorMessage
              id="message-error"
              name="message"
              component="span"
              style={{ color: "red", position: "absolute" }}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_recaptcha_public_key}
            onChange={(token) => {
              setRecaptchaToken(token);
            }}
            style={{transform:"scale(0.85)", transformOrigin:"50% 50%"}}
          />
          <button type="submit" onClick={() => setFormSubmitted(true)}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
