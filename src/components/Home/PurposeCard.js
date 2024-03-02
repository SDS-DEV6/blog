import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function PurposeCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div
          className="ojt-requirement-card"
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1>Purpose of this Website</h1>
          <p>
            As part of the requirements for CS 421, this platform serves as a
            portfolio of my experiences and achievements relevant to my
            coursework and career aspirations.
          </p>
          <h3>Key Sections:</h3>
          <ul>
            <li>
              <strong>About Me:</strong> Learn more about my background, skills,
              and interests.
            </li>
            <li>
              <strong>Daily Blogs:</strong> Explore my reflections, insights,
              and learnings on a day-to-day basis.
            </li>
            <li>
              <strong>Cebu Educational Tour 2023:</strong> A detailed account of
              my participation and experiences during the educational tour in
              Cebu.
            </li>
            <li>
              <strong>Last Year's Research Festival:</strong> Highlights and
              outcomes from my involvement in the previous year's research
              festival.
            </li>
            <li>
              <strong>Training/Seminars:</strong> Details of the various
              training sessions and seminars I have attended to enhance my
              knowledge and skills.
            </li>
          </ul>
          <p>
            This website not only fulfills the academic requirements but also
            showcases my dedication to learning, professional development, and
            active engagement within the field of computer science.
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PurposeCard;
