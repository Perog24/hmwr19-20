import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navLinks } from "../constants";

import { Container, Nav, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const activeLink = navLinks.find((link) => link.linkTo === path);
    const index =  navLinks.indexOf(activeLink);
    setActiveIndex(index);
  }, [location]);

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.linkTo}
                className={activeIndex === index ? "active" : ""}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
