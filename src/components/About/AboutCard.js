import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Ari Sohibussultoni </span>
            from <span className="purple"> Surabaya, Indonesia.</span>
            <br /> I am a Full Stack Developer. Currently I am studying as a Final Student at Surabaya State Electronics Polytechnic (PENS)
            <br />
            <br />
            Apart from coding, there are other activities that I enjoy: : 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing music
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Hangouts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ari Sohibussultoni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
