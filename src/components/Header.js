import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";

import { Container, Nav, Navbar } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
      const storedActiveIndex = localStorage.getItem("activeIndex");
      if (storedActiveIndex) {
        setActiveIndex(parseInt(storedActiveIndex));
      }
    }, []);

   const setActive = (index) => {
     setActiveIndex(index);
     localStorage.setItem("activeIndex", index.toString());
   };
   return (
      <header >   
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
               <Nav className="me-auto">           
               {navLinks.map((link, index)=>(<Nav.Link key={index} href={link.linkTo}  onClick={() => setActive(index)}
                className={activeIndex === index ? "active" : ""}
              >{link.name}</Nav.Link>))}
               </Nav>
            </Container>
         </Navbar>
      </header>
   )
}