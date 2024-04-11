import React from "react";
import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <section className="hero">
      <img src="/homepage.jpg" alt="homepage" />
      <div className="item">
        <h3>WORK ABROAD CONSULTANCY</h3>
        <div>
          <h1>"Connect. Explore. Work Abroad."</h1>
          <p>
          Welcome to Work Abroad Consultancy! We specialize in providing comprehensive visa
          services and job opportunities for individuals aspiring to work abroad.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            connect for more information
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage
