/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

import "./../Sidebar/sidebar.css"

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="">
            <i className="tim-icons icon-email-85" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} creado con{" "}
          <i className="tim-icons icon-heart-2" /> por{" "}
          <a
          className="lema-link"
            href=""
            target="_blank"
          >
            Lema Sport
          </a>{" "}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
