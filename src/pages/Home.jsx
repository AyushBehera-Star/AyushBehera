import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import AmreshImage from "../assets/Amresh.png";
import styles from '../styles/Home.module.css';

/* Professional Roles */
const roles = [
  'Web Developer',
  'Full Stack Developer',
  'AI',
  'MERN Stack Developer',
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentIndex = loopNum % roles.length;
    const fullText = roles[currentIndex];

    const handleTyping = () => {
      setDisplayText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <Box id={styles.homeSection} className={styles.homeContainer}>
      <Box id={styles.homeWrapper} className={styles.contentWrapper}>

        {/* LEFT CONTENT */}
        <Box id={styles.homeTextSection} className={styles.textSection}>
          <Typography
            id={styles.greetingText}
            variant="h5"
            className={styles.greeting}
          >
            Hello, I'm
          </Typography>

          <Typography
            id={styles.nameText}
            variant="h2"
            className={styles.name}
          >
            Ayush Behera
          </Typography>

          <Typography
            id={styles.roleText}
            variant="h4"
            className={styles.role}
          >
            <span id={styles.highlightText} className={styles.highlight}>
              {displayText}
            </span>
          </Typography>

          <Typography
            id={styles.descriptionText}
            variant="body1"
            className={styles.description}
          >
            I am <strong>Ayush Behera</strong>, a student and aspiring web developer,
            currently working as a <strong>Web Intern at AediaX Tech Private Limited</strong>.
            I am pursuing my studies at <strong>Gangadhar Meher University</strong>,
            with a strong interest in modern web technologies, full-stack development,
            and building practical, real-world applications.
          </Typography>

          <Button
            id={styles.moreButtonId}
            variant="contained"
            href="/about"
            className={styles.moreButton}
          >
            More About Me
          </Button>
        </Box>

        {/* RIGHT CONTENT */}
        <Box id={styles.homeImageSection} className={styles.imageSection}>
          <Paper
            elevation={10}
            id={styles.imagePaper}
            className={styles.imageContainer}
          >
            <img
              id={styles.profileImg}
              src={AmreshImage}
              alt="Amresh Bhuyan"
              className={styles.profileImage}
            />
          </Paper>
        </Box>

      </Box>
    </Box>
  );
}

export default Home;
