import React, { useState } from 'react';
import { Breadcrumbs, Input, Textarea, Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import successIcon from '../../assets/success-icon.svg';
import errorIcon from '../../assets/error-icon.svg';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [dialogState, setDialogState] = useState({
    open: false,
    message: '',
    type: 'success' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lvk88vh', 'template_klhm8as', e.target, 'NTNQM6wB4KteGq8pt')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setDialogState({
          open: true,
          message: 'Your message has been successfully sent. Thank you! ',
          type: 'success'
        });
        setFormData({ name: '', email: '', mobile: '', message: '' }); // Reset the form
      }, (error) => {
        console.log('Email sending error:', error.text);
        setDialogState({
          open: true,
          message: 'Failed to send the message. Please try again.',
          type: 'error'
        });
      });
  };

  const handleClose = () => {
    setDialogState({ ...dialogState, open: false });
  };

  return (
    <>
      <section className='contact-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black'>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>Contact Me</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/contact" className='text-white text-base' style={{ fontWeight: '400' }}>CONTACT</Link>
        </Breadcrumbs>
      </section>

      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Get In Touch</h1>
            <hr className='border-b-4 border-secondary w-28 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>I'd love to hear from you! Whether you have a project idea, a question about my work, or simply want to connect and say hello, please don’t hesitate to reach out. Drop me a message below, and I'll get back to you as soon as possible.</p>
        </div>
        <div className='flex justify-center'>
          <div className="contact-form w-full md:w-[550px] rounded-lg bg-primary ">
            <div className='bg-[#00000000] rounded-lg p-8'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-8'>
                  <Input
                    variant="standard"
                    label="Full name"
                    name="name"
                    className='text-white input-field'
                    required
                    color='light-blue'
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Input
                    variant="standard"
                    label="Email"
                    name="email"
                    type='email'
                    required
                    className='text-white input-field'
                    color='light-blue'
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    variant="standard"
                    label="Mobile"
                    name="mobile"
                    type='tel'
                    className='text-white input-field'
                    color='light-blue'
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <Textarea
                    variant="standard"
                    label="Message"
                    name="message"
                    required
                    className='text-white input-field'
                    color='light-blue'
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className='flex justify-end'>
                  <button type='submit'>
                    SEND
                    <span></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Dialog
          className='bg-primary py-2 border border-[#ffffff25]'
          open={dialogState.open}
          handler={handleClose}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className='text-white text-2xl font-cairo font-bold mx-2'> <img src={` ${dialogState.type == 'success' ? successIcon : errorIcon}`} alt={dialogState.type} className='w-8 me-3' /> <span>{`${dialogState.type == 'success' ? 'Success' : 'Error'}`}</span></DialogHeader>
          <hr className={` ${dialogState.type == 'success' ? 'border-[#388e3c34]' : 'border-[#d32f2f36]'}`} />
          <DialogBody className={`text-xl  mx-2 text-white`}>
            {dialogState.message}
          </DialogBody>
          <DialogFooter className='mx-2'>
            <Button onClick={handleClose} className={`${dialogState.type == 'success' ? 'bg-green-700' : 'bg-red-700'} text-white font-bold px-4 py-2 text-sm outline-none focus:opacity-100`}>
              {`${dialogState.type === 'success' ? 'OK' : 'Close'}`}
            </Button>
          </DialogFooter>
        </Dialog>
        <p className='text-accent my-20'>If you prefer to send an email directly instead of using the form, feel free to reach out to me at <span className='font-bold italic'>anujchaudhary3112@gmail.com</span>. Whether you have a specific project in mind, a question, or just want to connect, I'm always happy to hear from you. Click <a href="mailto:anujchaudhary3112@gmail.com" className='text-white underline'>here</a> to send an email directly.</p>
        <hr className="border-[#ffffff25] my-5" />
      </section>
    </>
  );
}

export default Contact;
