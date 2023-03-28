import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
// import './style.css';

function ContactForm() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [contactName, setContactName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactNameError, setContactNameError] = useState(''); //setFirstNameError
  const [emailError, setEmailError] = useState(''); //setLastNameError
  const [contactMessageError, setContactMessageError] = useState(''); 
  const [showError, setShowError] = useState(false);


  const handleInputChange = (e) => {
    setShowError(false);
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    if (value === "" && name === "contactName") {
      setContactNameError("Not empty values allowed")
    }
    if (value === "" && name === "emailAddress") {
        setEmailError("No empty values allowed")
    }
    if (value === "" && name === "contactMessage") {
        setContactMessageError("No empty values allowed")
    }

    if (value !== "" && name === "contactName") {
        setContactNameError("")
    }
    if (value !== "" && name === "emailAddress") {
        setEmailError("")
    }
    if (value !== "" && name === "contactMessage") {
        setContactMessageError("")
    }
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    if (name === 'contactName'){
        return setContactName(value)
    }
    if (name === 'emailAddress'){
        return setEmailAddress(value)
    }
    if (name === 'contactMessage'){
        return setContactMessage(value)
    }
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();


    if (contactName === "") {
      setContactNameError("Contact Name cannot be empty")
    }
    // if (emailAddress === "") {
    //   setEmailError("Email Address cannot be empty")
    // }
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress) === false) {
        setEmailError("Please enter in a valid email address")
      }

    if (contactMessage === "") {
        setContactMessageError("Message field cannot be left blank")
    }
    if (contactName === "" || emailAddress === "" || contactMessage === "" || contactNameError !== "" || emailError !== "" || contactMessageError !== "") {
      setShowError(true);
      return
    }
    // // Alert the user their first and last name, clear the inputs
    // alert(`Hello ${firstName} ${lastName}`);
    // setFirstName('');
    // setLastName('');
  };

  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text id='basic-addon1'>Name: </InputGroup.Text> 
        <Form.Control  
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Contact Name"
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text id='basic-addon1'>Email Address: </InputGroup.Text> 
        <Form.Control  
          value={emailAddress}
          name="emailAddress"
          onChange={handleInputChange}
          type="text"
          placeholder="eMail Address"
        />
        </InputGroup>

        <InputGroup className="mb-3">
        <InputGroup.Text id='basic-addon1'>Contact Message: </InputGroup.Text> 
        <Form.Control as="textarea" rows={4}
           value={contactMessage}
           name="contactMessage"
           onChange={handleInputChange}
           type="textarea"
           placeholder=""
        />
        </InputGroup>
        <Button type='submit' onClick={handleFormSubmit}>Submit</Button>
        {showError && <>
            <p>{contactNameError}</p>
            <p>{emailError}</p>
            <p>{contactMessageError}</p>
        </>}
      </Form>
  );
}

export default ContactForm;
