import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

function ContactInfo() {
  const [personName, setPersonName] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleName = (e) => {
    setPersonName(e.target.value);
  };

  const handleEmail = (e) => {
    setPersonEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    init(process.env.REACT_APP_USER_ID);

    if (personEmail.length > 0 && personName.length > 0 && message.length > 0) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target
          // process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            alert(
              "Viesti lähetetty, otamme yhtetyttä sinuun mahdollisimman pian.",
              result.text
            );
          },
          (error) => {
            alert("Tapahtui virhe. Yritä uudestaan, kiitos.", error.text);
          }
        );
      setPersonName("");
      setPersonEmail("");
      setMessage("");
    } else {
      alert("Täytä kaikki kentät!");
    }
  };

  return (
    <div>
      <div className="container">
        <div id="image"></div>
        <div className="centered">
          <h3 className="text-style">Yhteystiedot:</h3>
          <div className="text-style">Kulmalantie 65</div>
          <div className="text-style">20100 Turku</div>
          <br />
          <br />
          <br />
          <div>
            <h3 className="text-style">Ota yhteyttä:</h3>
            <Form ref={form} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-style">Nimi:</Form.Label>
                  <Form.Control
                    name="name"
                    placeholder="Name"
                    value={personName}
                    onChange={handleName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className="text-style">Sähköposti:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={personEmail}
                    onChange={handleEmail}
                  />

                  <small id="emailHelp" className="form-text text-light ">
                    Emme jaa sähköpostiosoitettasi muille osapuolille.
                  </small>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formTextArea">
                <Form.Label className="text-style">Viesti:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={message}
                  onChange={handleMessage}
                />
              </Form.Group>
              <Button type="submit">Lähetä</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
