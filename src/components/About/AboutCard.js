import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kent Marjhon Daligdig </span>
            from <span className="purple"> Pagadian City, Philippines.</span>
            <br />
            I am a student currently undertaking a Bachelor's Degree in Computer
            Science in the College of Computing Studies of Saint Columban
            College.
            <br />
            And currently an intern as a full stack developer at Studio Pinya.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""If you're no longer seeing red, it's either because you've
            mastered your craft or you've stopped evolving and adapting to new
            technologies. A proficient Software Engineer remains vigilant for
            red flags and adept at resolving them.""{" "}
          </p>
          <footer className="blockquote-footer">SDSKENT.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
