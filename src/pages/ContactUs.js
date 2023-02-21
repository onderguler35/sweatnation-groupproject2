import React from "react"; // importing React

const ContactUs = () => {
  // creating ContactUs component
  return (
    // returning the JSX
    <div className="formWrapperDiv">
      Please use the below form to contact our team. <br /> * indicates required
      fields.
      <form
        action="https://api.web3forms.com/submit" //
        method="POST"
        className="form"
      >
        <input
          type="hidden"
          name="access_key"
          defaultValue="ff5da87c-69a0-4031-90c8-80583e6b1965"
        />
        <label for="name">*Your name:</label>
        <input
          id="name"
          className="formInput"
          type="text"
          name="name"
          required="True"
        />
        <label for="email">*E-mail Address:</label>
        <input
          type="email"
          id="email"
          className="formInput"
          name="email"
          required="True"
        />
        <label for="message">*Message:</label>
        <textarea
          className="textArea"
          id="message"
          name="message"
          required="True"
          defaultValue={""}
        />
        <input
          type="hidden"
          name="redirect"
          defaultValue="https://web3forms.com/success" // redirect to a success page
        />
        <button type="submit" className="contactBtn">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactUs; // exporting ContactUs component
