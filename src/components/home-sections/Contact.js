import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Contact() {
  const initialValues = {
    email: "",
    name: "",
    message: ""
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email!").required("Please provide your email so I can get back to you!"),
    name: Yup.string().max(15).required("Please provide your name so I can get back to you!"),
    message: Yup.string().max(500).required("Please enter a message!")
  });
  async function onSubmit(data) {
    const serverEndpoint = "http://localhost:3001/mail"    // temporary until I get my backend deployed somewhere
    await axios.post(serverEndpoint, data).then((response) => {
      console.log('you fiddled the riddle!')
    });
    window.location.reload();
  }

  return (
    <div id="contact" className="section">
      <h2>Contact Section</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-container">
          <label htmlFor="inputEmail">Email</label>
          <ErrorMessage name="email" component="span" style={{color: "red"}}/>
          <Field 
            autoComplete="off"
            id="inputEmail"
            name="email"
            placeholder="example@gmail.com"
          />
          <label htmlFor="inputName">Name</label>
          <ErrorMessage name="name" component="span" style={{color: "red"}}/>
          <Field 
            autoComplete="off"
            id="inputName"
            name="name"
            placeholder="john"
          />
          <label htmlFor="inputMessage">Message</label>
          <ErrorMessage name="message" component="span" style={{color: "red"}}/>
          <Field 
            autoComplete="off"
            id="inputMessage"
            name="message"
            placeholder="(up to 500 characters)"
            as="textarea"
          />
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
