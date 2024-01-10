import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i8v8d4s', 'template_omq04l8', form.current, 'Hm6PNfXns87hb4zc8')
      .then((result) => {
          console.log(result.text);
          alert("Done")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail} className='formm'>
      <label>Name</label>
      <input type="text" name="name" className='Name' />
      <label>Email</label>
      <input type="email" name="email" className='Email' />
    
      <label>PhoneNumber</label>
      <input type="number" name="number"  className='Message'/>
      <label>Message</label>
      <textarea name="text" className='txt_ara' />
      <input type="submit" value="Send"className='sbt'/>
      <a href='/Home'>Back</a>
    </form>
    
    </>
  );
};