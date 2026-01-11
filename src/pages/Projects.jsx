import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{ color: 'rgb(66, 201, 255)' }} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "My personal portfolio website showcasing my skills, projects, education, and contact information using modern web technologies.",
      tech: ['React', 'Material UI', 'CSS', 'SEO'],
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.blue
    },
    {
      title: "Tourism Website",
      description:
        "A responsive tourism website designed to promote destinations, travel services, and local attractions with a user-friendly interface.",
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      icon: <LanguageIcon className={styles.icon} />,
      color: styles.green
    },
    {
      title: "Business & Corporate Websites",
      description:
        "Multiple business-oriented websites developed for small companies and organizations, focusing on performance, SEO, and professional design.",
      tech: ['React', 'SEO', 'Responsive Design'],
      icon: <GroupIcon className={styles.icon} />,
      color: styles.purple
    }
  ];

  const metaDescription = `Projects by Ayush Behera including a personal portfolio website, tourism website, and business web development projects.`;

  return (
    <>
      <Helmet>
        <title>Projects | Ayush Behera – Web Developer</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <meta
          name="keywords"
          content="Ayush Behera projects, web development projects, portfolio website, tourism website, business websites, student web developer"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projects | Ayush Behera – Web Developer" />
        <meta
          property="og:description"
          content="Explore web development projects by Ayush Behera including portfolio, tourism, and business websites."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://amresh.aediax.com/projects" />

        <meta name="author" content="Ayush Behera" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Ayush Behera",
            "description": "Web development projects by Ayush Behera",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Ayush Behera"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Projects
        </Typography>

        <Typography className={styles.subtitle}>
          Portfolio, tourism, and business web development projects
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${styles.card} ${project.color}`}
            >
              <CardContent>
                {project.icon}
                <Typography className={styles.cardTitle}>
                  {project.title}
                </Typography>
                <Typography className={styles.text}>
                  {project.description}
                </Typography>
                <TechStack tech={project.tech} />
                <Link component="span">
                  Project Details
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;
