import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

const Profile = () => {
  // Replace this with your own image, first name, last name, address, and description
  const profileImageSrc = 'https://bairesdev.mo.cloudinary.net/blog/2022/08/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156-1.jpg?tx=w_3840,q_auto';
  const firstName = 'John';
  const lastName = 'Doe';
  const address = 'Honolulu, HI';
  const description =
    'I am a passionate software engineer with a strong background in web development and a love for problem-solving.';
  const email = 'johndoe@example.com';
  const phone = '+1 (123) 456-7890';
  const linkedin = 'https://www.linkedin.com/in/johndoe/';
  const github = 'https://github.com/johndoe';
  const education = [
    {
      institution: 'University of Hawaii at Manoa',
      degree: 'Bachelor of Science in Computer Science',
      year: '2015-2019',
      gpa: '3.9/4.0',
    },
  ];
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'Problem Solving',
  ];
  const workExperience = [
    {
      position: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      duration: '2019-2022',
      description: 'Developed web applications and led a team of developers.',
    },
  ];
  const projects = [
    {
      title: 'E-commerce Website',
      description:
        'Built a full-stack e-commerce website using React and Node.js.',
      link: 'https://example.com/ecommerce',
    },
  ];

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={4}>
                  <Image src={profileImageSrc} fluid />
                </Col>
                <Col xs={12} md={8}>
                  <h2>
                    {firstName} {lastName}
                  </h2>
                  <p>
                    <strong>Address:</strong> {address}
                  </p>
                  <p>
                    <strong>About Me:</strong> {description}
                  </p>
                </Col>
              </Row>
              <hr />
              <h4>Contact Information</h4>
              <p>
                <strong>Email:</strong> {email}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a href={linkedin}>
                  {linkedin}
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>
                <a href={github}>
                  {github}
                </a>
              </p>
              <hr />
              <h4>Education</h4>
              <ul>
                {education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.institution}</strong> - {edu.degree} (
                    {edu.year})
                    <br />
                    GPA: {edu.gpa}
                  </li>
                ))}
              </ul>
              <hr />
              <h4>Skills</h4>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <hr />
              <h4>Work Experience</h4>
              <ul>
                {workExperience.map((exp, index) => (
                  <li key={index}>
                    <strong>{exp.position}</strong> - {exp.company} (
                    {exp.duration})
                    <br />
                    {exp.description}
                  </li>
                ))}
              </ul>
              <hr />
              <h4>Projects</h4>
              <ul>
                {projects.map((project, index) => (
                  <li key={index}>
                    <strong>{project.title}</strong>
                    <br />
                    {project.description}
                    <br />
                    <a
                      href={project.link}
                    >
                      {project.link}
                    </a>
                  </li>
                ))}
              </ul>
              <br />
              <Button variant="primary">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
