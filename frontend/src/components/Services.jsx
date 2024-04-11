 /*import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/emplovisa.png",
      title: "Employment Visa",
    },
    {
      id: 2,
      url: "/stuvisa.png",
      title: "Student Visa",
    },
    {
      id: 3,
      url: "/touristvisa.png",
      title: "Tourist Visa",
    },
    {
      id: 4,
      url: "/ielts.png",
      title: "IELTS/PTE/TOEFL",
    }
    
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;  */

import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/emplooy.png",
      title: "DESCRIPTION:Navigate the complexities of international employment with our expert assistance. We guide you through the entire visa application process, ensuring compliance and maximizing approval chances.",
      
      
    },
    {
      id: 2,
      url: "/stud.png",
      title: " DESCRIPTION:Embark on your educational journey abroad stress-free with our Student Visa services. We provide comprehensive guidance on visa application procedures and required documentation.",
      
    },
    {
      id: 3,
      url: "/tour.png",
      title: "DESCRIPTION:Make your travel dreams a reality with our Tourist Visa assistance. We offer comprehensive support in obtaining tourist visas for various destinations, ensuring a hassle-free experience..",
      
    },
    {
      id: 4,
      url: "/ielt.png",
      title: "DESCRIPTION:Boost your language proficiency scores with our specialized coaching. We provide personalized study plans, expert tips, and practice materials to help you achieve your goals.",
      
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <img src={element.url} alt={element.title} />
                <h3>{element.title}</h3>
                <p>{element.description}</p>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;

