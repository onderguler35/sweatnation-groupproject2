import React from "react";
import { Box, Stack } from '@mui/material';

const ContactUs = () => {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" className='form'>
      
      <Stack direction="column" justifySelf={"center"} sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">  
      <input
        type="hidden"
        name="access_key"
        defaultValue="ff5da87c-69a0-4031-90c8-80583e6b1965"
      />
      <label for="name">Your name:</label><br/>
      <input id='name' type="text" name="name" required="True" /><br/>
      <label for="email">E-mail Address:</label><br/>
      <input type="email" id='email' name="email" required="True" /><br/>
      <label for="message">Message:</label><br/>
      <textarea id='message' name="message" required="True" defaultValue={""} /><br/>
      <input
        type="hidden"
        name="redirect"
        defaultValue="https://web3forms.com/success"
      />
      <button type="submit">Submit Form</button>  
      </Stack>
      
      
    </form>
  )
};

export default ContactUs;
