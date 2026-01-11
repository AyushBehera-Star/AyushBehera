import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import MobileIcon from '@mui/icons-material/Smartphone';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip
        key={i}
        label={item}
        size="small"
        style={{ color: 'rgb(66, 201, 255)' }}
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Design and development of responsive, modern, and SEO-friendly websites using current web technologies.",
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'SEO'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Web Development"
    },
    {
      title: "Frontend UI Development",
      description:
        "Building clean, user-friendly interfaces with a focus on usability, performance, and responsive design.",
      tech: ['React', 'Material UI', 'Responsive Design'],
      icon: <MobileIcon className={styles.icon} />,
      color: styles.green,
      category: "Frontend Development"
    },
    {
      title: "Backend Basics & APIs",
      description:
        "Developing basic backend logic, APIs, and database integration for small to medium web applications.",
      tech: ['Node.js', 'Express', 'Firebase'],
      icon: <CloudIcon className={styles.icon} />,
      color: styles.purple,
      category: "Backend Development"
    },
    {
      title: "Learning & Internship Projects",
      description:
        "Hands-on project work and continuous learning through internships, academic projects, and personal practice.",
      tech: ['Git', 'Team Collaboration', 'Real-world Projects'],
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.dark,
      category: "Education"
    }
  ];

  const metaDescription = `Services by Ayush Behera including web development, frontend design, backend basics, and internship-level projects.`;

  const allKeywords = Array.from(
    new Set(services.flatMap(s => s.tech))
  ).join(', ');

  return (
    <>
      <Helmet>
        <title>Services | Ayush Behera – Web Developer</title>

        <meta name="description" content={metaDescription} />

        <meta
          name="keywords"
          content={`Ayush Behera services, ${allKeywords}, web developer, student developer, frontend development`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services | Ayush Behera – Web Developer" />
        <meta
          property="og:description"
          content="Web development and frontend services by Ayush Behera, a student and web developer."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://amresh.aediax.com/services" />

        <meta name="author" content="Ayush Behera" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ayush Behera Web Development Services",
            "description": "Web development and frontend services by Ayush Behera",
            "provider": {
              "@type": "Person",
              "name": "Ayush Behera",
              "jobTitle": "Student & Web Developer",
              "email": "ayushbehera2803@gmail.com"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description,
                  "category": service.category
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Services
        </Typography>

        <Typography className={styles.subtitle}>
          Learning, building, and delivering modern web solutions
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <CardContent>
                {service.icon}
                <Typography className={styles.cardTitle} itemProp="name">
                  {service.title}
                </Typography>
                <Typography className={styles.text} itemProp="description">
                  {service.description}
                </Typography>
                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;
