import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pnbppkh from "../../Assets/Projects/KLHK.PNG";
import emotion from "../../Assets/Projects/emotion.png";
import manlab from "../../Assets/Projects/MANLAB.PNG";
import simonika from "../../Assets/Projects/SIMONIKA.PNG";
import serviskita from "../../Assets/Projects/serviskita.PNG";
import sitaruboyo from "../../Assets/Projects/SITARUBOYO.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simonika}
              isBlog={false}
              title="SIMONIKA"
              description="Development of the SIMONIKA Application (Sistem Monitoring Kualitas Air) owned by the East Java Provincial Government. In this application, a system is created to accommodate all data on the location of bridges or rivers in East Java. This is intended so that the East Java Provincial Government has river water data. the data will be processed which will later be used as a parameter to measure the level of pollution in the river and that location. by using predefined parameters such as microbiology, chemistry, and physics. which is calculated using STORET Standard and IP Standard."
              ghLink="https://github.com/arisohib"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sitaruboyo}
              isBlog={false}
              title="SITARUBOYO"
              description="The application belongs to the Surabaya city government, namely an information system which is a combination of projects. a combination of GIS Information Systems and Laravel Applications. This application has 2 types of data, namely tabular data for Laravel applications. and spatial data for use in GIS information systems. database used Postgresql."
              ghLink="https://github.com/arisohib"
              demoLink="https://sitaruboyo.dprkpp.web.id/index/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manlab}
              isBlog={false}
              title="MANLAB"
              description="Clinical application for the online registration process, PCR Swab registration, print registration cards, print lab test results, and various medical checkups and their prices"
              ghLink="https://github.com/arisohib"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pnbppkh}
              isBlog={false}
              title="PNBP-PKH"
              description="KLHK's application (Ministry of Environment and Forestry) for an information system that handles payment processes and correspondence to payers. and also for payment reports such as accounts payable, income, payment data generation, automatic letter generation, and digital signatures."
              ghLink="https://github.com/arisohib"
              demoLink="https://pnbp-pkh2.menlhk.go.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={serviskita}
              isBlog={false}
              title="Serviskita.com"
              description="This application is an online shuttle service. the purpose of making this application is to make it easier for services that can be done from home. This application was built using the Laravel framework, MySQL. with a multi-role flow scheme. each user will have a member area and implement the SSO (Single Sign On) system."
              ghLink="https://github.com/arisohib"
              demoLink="https://apps.serviskita.com/login" 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
