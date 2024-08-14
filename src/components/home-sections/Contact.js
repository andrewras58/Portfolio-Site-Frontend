import React, {useEffect, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const initialValues = {
    email: "",
    name: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please provide your email"),
    name: Yup.string().max(15).required("Please provide your name"),
    message: Yup.string().max(500).required("Please enter a message"),
  });
  async function onSubmit(data) {
    const serverEndpoint = "http://localhost:3001/mail"; // temporary until I get my backend deployed somewhere
    await axios.post(serverEndpoint, data).then((response) => {
      console.log("you fiddled the riddle!");
    });
    window.location.reload();
  }

  useEffect(() => {
    console.log(formSubmitted);
  }, [formSubmitted]);

  return (
    <div id="contact" className="section">
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
            <Field
              autoComplete="off"
              id="inputEmail"
              name="email"
              placeholder="example@email.com"
            />
            <ErrorMessage
              id="email-error"
              name="email"
              component="span"
              style={{ color: "red", position: "absolute" }}
            />
          </div>
          <div className="field-container">
            <label htmlFor="inputName">Name</label>
            <Field
              autoComplete="off"
              id="inputName"
              name="name"
              placeholder="person"
            />
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
          <button type="submit" onClick={() => setFormSubmitted(true)}>Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
