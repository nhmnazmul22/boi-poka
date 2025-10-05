import React from "react";
import Container from "../Layout/Container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 p-10">
      <Container>
        <div className="footer sm:footer-horizontal text-base-content">
          <aside>
            <Link to="/" className="text-2xl font-bold">
              Book Vibe
            </Link>
            <p>
              Book Industries Ltd.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav data-testid="quick-links">
            <h6 className="footer-title">Quick Links</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/listed-books" className="link link-hover">
              Listed Books
            </Link>
            <Link to="/read-books" className="link link-hover">
              Pages to read
            </Link>
          </nav>
          <nav data-testid="legal-links">
            <h6 className="footer-title">Legal</h6>
            <Link to="/" className="link link-hover">
              Terms of use
            </Link>
            <Link to="/" className="link link-hover">
              Privacy policy
            </Link>
            <Link to="/" className="link link-hover">
              Cookie policy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
