import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:ayushbehera2803@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Helmet>
        <title>Contact Amresh Bhuyan | Web Developer & AI Engineer</title>

        <meta
          name="description"
          content="Get in touch with Amresh Bhuyan for collaborations, projects, or discussions about web development, AI, and technology."
        />

        <meta
          name="keywords"
          content="Amresh Bhuyan contact, web developer contact, AI engineer, collaboration, project inquiry, technology discussion"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Amresh Bhuyan",
              "url": "https://amreshbhuyan.com/contact",
              "author": {
                "@type": "Person",
                "name": "Amresh Bhuyan",
                "email": "ayushbehera2803@gmail.com"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "ayushbehera2803@gmail.com",
                  "contactType": "personal",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+916370364998",
                  "contactType": "personal",
                  "areaServed": "IN",
                  "availableLanguage": "English"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <Box className={styles.contactContainer}>
        <Typography variant="h2" className={styles.title}>
          Contact
        </Typography>

        <Typography className={styles.subtitle}>
          Let’s discuss ideas, technology, and collaboration.
        </Typography>

        {/* Contact Details */}
        <Box className={styles.contactInfo}>
          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Email:</strong> ayushbehera2803@gmail.com
          </Typography>

          <Typography>
            <WhatsAppIcon fontSize="small" />{' '}
            <Link
              href="https://wa.me/916370364998"
              target="_blank"
              underline="none"
              aria-label="Contact via WhatsApp"
            >
              +91 63703 64998 (WhatsApp)
            </Link>
          </Typography>
        </Box>

        {/* Form */}
        <Box className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Name" name="name" required onChange={handleChange} />
            <TextField fullWidth label="Email" name="email" type="email" required onChange={handleChange} />
            <TextField fullWidth label="Subject" name="subject" required onChange={handleChange} />
            <TextField fullWidth label="Message" name="message" multiline rows={4} required onChange={handleChange} />
            <Button type="submit" className={styles.submitButton}>
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
