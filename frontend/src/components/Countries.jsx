/* import React, { useState } from 'react';

const Home = () => {
  const [showCountries, setShowCountries] = useState(false);

  const handleToggleCountries = () => {
    setShowCountries(!showCountries);
  };

  return (
    <div className="home">
      <h1>Highlighting the countries Work Abroad Consultancy primarily focuses on:</h1>
      <Card
        title="Primary Focus Countries"
        buttonText={showCountries? 'Hide' : 'Show'}
        onClick={handleToggleCountries}
      >
        {showCountries && <Countries />}
      </Card>
    </div>
  );
};

const Countries = () => {
  return (
    <div className="primary-focus-countries">
      <h2>Primary Focus Countries</h2>
      <ul>
        <li>Germany</li>
        <li>Bangladesh</li>
        <li>Dubai</li>
        <li>UK</li>
        <li>Singapore</li>
        <li>New Zealand</li>
        <li>Europe</li>
        <li>Poland</li>
        <li>Gulf Countries</li>
      </ul>
    </div>
  );
};

const Card = ({ title, buttonText, onClick, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
      {children}
    </div>
  );
};

export default Home; */

import React, { useState } from 'react';

const Home = () => {
  const [showCountries, setShowCountries] = useState(false);

  const handleToggleCountries = () => {
    setShowCountries(!showCountries);
  };

  return (
    <div className="home-container">
     
      <Card
        title="Primary Focus Countries"
      
        buttonText={showCountries ? 'Hide' : 'Show'}
        onClick={handleToggleCountries}
      >
        {showCountries && <Countries />}
      </Card>
    </div>
  );
};

const Countries = () => {
  return (
    <div className="primary-focus-countries">
      
      <h2>Highlighting the countries Work Abroad Consultancy primarily focuses on:</h2>
      <ul>
        <li>Germany</li>
        <li>Bangladesh</li>
        <li>Dubai</li>
        <li>UK</li>
        <li>Singapore</li>
        <li>New Zealand</li>
        <li>Europe</li>
        <li>Poland</li>
        <li>Gulf Countries</li>
      </ul>
    </div>
  );
};

const Card = ({ title, buttonText, onClick, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={onClick}>{buttonText}</button>
      {children}
    </div>
  );
};

export default Home;
