import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Ayush Behera | Student & Web Developer</title>

        <meta
          name="description"
          content="Learn about Ayush Behera, a student and web developer currently working as a Web Intern at AediaX Tech Private Limited. Studying at Gangadhar Meher University."
        />

        <meta
          name="keywords"
          content="Ayush Behera, Web Developer, Web Intern, AediaX Tech, Student Developer, Gangadhar Meher University, Full Stack Developer"
        />

        <meta name="author" content="Ayush Behera" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Ayush Behera | Web Developer & Student" />
        <meta
          property="og:description"
          content="Ayush Behera is a student and web developer, currently a Web Intern at AediaX Tech Private Limited."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Ayush Behera Portfolio" />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <Box id={styles.aboutSection} className={styles.aboutContainer}>

        <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
          About Ayush Behera
        </Typography>

        <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
          Student & Web Developer
        </Typography>

        {/* Biography */}
        <Typography id={styles.bioPara1} className={styles.bio}>
          Ayush Behera is a student and aspiring web developer with a strong interest
          in modern web technologies and software development. He is currently focused
          on building practical, user-friendly, and scalable web applications.
        </Typography>

        <Typography id={styles.bioPara2} className={styles.bio}>
          He is working as a <strong>Web Intern at AediaX Tech Private Limited</strong>,
          where he gains hands-on experience in real-world development environments,
          contributing to frontend and backend web solutions.
        </Typography>

        <Typography id={styles.bioPara3} className={styles.bio}>
          Ayush is pursuing his higher education at <strong>Gangadhar Meher University</strong>,
          where he is developing a solid foundation in programming, problem-solving,
          and software engineering concepts.
        </Typography>

        {/* Cards */}
        <Box id={styles.cardsWrapper} className={styles.cardContainer}>

          {/* Professional Role */}
          <Card id={styles.professionalRoleCard} className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Professional Role
              </Typography>

              <Typography className={styles.cardText}>
                Ayush Behera currently works as a Web Intern at AediaX Tech Private Limited.
                His role involves learning and contributing to modern web development
                practices, collaborating with developers, and building responsive
                and efficient web applications.
              </Typography>
            </CardContent>
          </Card>

          {/* Academic Background */}
          <Card id={styles.academicCard} className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Academic Background
              </Typography>

              <Typography className={styles.cardText}>
                Ayush is a student at Gangadhar Meher University. His academic journey
                focuses on computer science fundamentals, web development technologies,
                and applying theoretical knowledge to real-world projects.
              </Typography>
            </CardContent>
          </Card>

          {/* Skills & Interests */}
          <Card id={styles.skillsCard} className={styles.card}>
            <CardContent>
              <Typography variant="h6" className={styles.cardTitle}>
                Skills & Interests
              </Typography>

              <Typography className={styles.cardText}>
                His areas of interest include frontend development, backend basics,
                full-stack web development, and continuously learning new technologies
                to improve performance, usability, and scalability.
              </Typography>
            </CardContent>
          </Card>

        </Box>
      </Box>
    </>
  );
}

export default About;
