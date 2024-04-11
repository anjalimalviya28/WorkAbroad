 /*import React, { useState } from "react";

const JobOpportunities = () => {
  const jobOpportunities = [
    {
      id: 1,
      title: "Graduate",
      opportunities: [
        {
          title: "Software Engineer",
          company: "Google",
          location: "Mountain View, CA",
          description:
            "We are looking for a Software Engineer to join our team. You will be responsible for designing, developing, and maintaining software systems.",
        },
        {
          title: "Data Scientist",
          company: "Microsoft",
          location: "Redmond, WA",
          description:
            "We are looking for a Data Scientist to join our team. You will be responsible for analyzing and interpreting complex data sets to drive business decisions.",
        },
      ],
    },
    {
      id: 2,
      title: "Postgraduate",
      opportunities: [
        {
          title: "Research Scientist",
          company: "IBM",
          location: "Yorktown Heights, NY",
          description:
            "We are looking for a Research Scientist to join our team. You will be responsible for conducting research and development in areas such as AI, quantum computing, and blockchain.",
        },
        {
          title: "Product Manager",
          company: "Amazon",
          location: "Seattle, WA",
          description:
            "We are looking for a Product Manager to join our team. You will be responsible for defining and driving the product vision and strategy.",
        },
      ],
    },
    {
      id: 3,
      title: "10/10+2",
      opportunities: [
        {
          title: "Customer Service Representative",
          company: "Walmart",
          location: "Bentonville, AR",
          description:
            "We are looking for a Customer Service Representative to join our team. You will be responsible for handling customer inquiries and resolving issues.",
        },
        {
          title: "Sales Associate",
          company: "Target",
          location: "Minneapolis, MN",
          description:
            "We are looking for a Sales Associate to join our team. You will be responsible for assisting customers and driving sales.",
        },
      ],
    },
  ];
  const [showOpportunities, setShowOpportunities] = useState(false);

  const handleShowOpportunities = (id) => {
    setShowOpportunities((prev) => prev === id? null : id);
  };

  return (
    <>
      <div className="job-opportunities container">
        <h2>JOB OPPORTUNITIES</h2>
        <div className="categories">
          {jobOpportunities.map((category) => {
            return (
              <div className="category" key={category.id}>
                <h3>{category.title}</h3>
                <button onClick={() => handleShowOpportunities(category.id)}>
                  {showOpportunities === category.id? 'Hide Opportunities' : 'Show Opportunities'}
                </button>
                {showOpportunities === category.id && (
                  <div className="opportunities">
                    {category.opportunities.map((opportunity) => {
                      return (
                        <div className="opportunity" key={opportunity.title}>
                          <h4>{opportunity.title}</h4>
                          <p>{opportunity.company}</p>
                          <p>{opportunity.location}</p>
                          <p>{opportunity.description}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default JobOpportunities;  */
import React, { useState } from "react";


const JobOpportunities = () => {
  const jobOpportunities = [
    {
      id: 1,
      title: "Graduate",
      opportunities: [
        {
          title: "Software Engineer",
          company: "Google",
          location: "Mountain View, CA",
          description:
            "We are looking for a Software Engineer to join our team. You will be responsible for designing, developing, and maintaining software systems.",
        },
        {
          title: "Data Scientist",
          company: "Microsoft",
          location: "Redmond, WA",
          description:
            "We are looking for a Data Scientist to join our team. You will be responsible for analyzing and interpreting complex data sets to drive business decisions.",
        },
        {
          title: "UX/UI Designer",
          company: "Apple",
          location: "Cupertino, CA",
          description:
            "We are looking for a UX/UI Designer to join our team. You will be responsible for creating user-centered designs for our digital products.",
        },
        {
          title: "Business Analyst",
          company: "Facebook",
          location: "Menlo Park, CA",
          description:
            "We are looking for a Business Analyst to join our team. You will be responsible for analyzing market trends and providing insights to drive business growth.",
        },
      ],
    },
    {
      id: 2,
      title: "Postgraduate",
      opportunities: [
        {
          title: "Research Scientist",
          company: "IBM",
          location: "Yorktown Heights, NY",
          description:
            "We are looking for a Research Scientist to join our team. You will be responsible for conducting research and development in areas such as AI, quantum computing, and blockchain.",
        },
        {
          title: "Product Manager",
          company: "Amazon",
          location: "Seattle, WA",
          description:
            "We are looking for a Product Manager to join our team. You will be responsible for defining and driving the product vision and strategy.",
        },
        {
          title: "Cybersecurity Analyst",
          company: "Cisco",
          location: "San Jose, CA",
          description:
            "We are looking for a Cybersecurity Analyst to join our team. You will be responsible for identifying and mitigating security risks across our network infrastructure.",
        },
        {
          title: "Financial Analyst",
          company: "Goldman Sachs",
          location: "New York, NY",
          description:
            "We are looking for a Financial Analyst to join our team. You will be responsible for analyzing financial data and providing insights to support strategic decision-making.",
        },
      ],
    },
    {
      id: 3,
      title: "10/10+2",
      opportunities: [
        {
          title: "Customer Service Representative",
          company: "Walmart",
          location: "Bentonville, AR",
          description:
            "We are looking for a Customer Service Representative to join our team. You will be responsible for handling customer inquiries and resolving issues.",
        },
        {
          title: "Sales Associate",
          company: "Target",
          location: "Minneapolis, MN",
          description:
            "We are looking for a Sales Associate to join our team. You will be responsible for assisting customers and driving sales.",
        },
        {
          title: "Delivery Driver",
          company: "FedEx",
          location: "Memphis, TN",
          description:
            "We are looking for a Delivery Driver to join our team. You will be responsible for safely and efficiently delivering packages to our customers.",
        },
        {
          title: "Warehouse Associate",
          company: "Amazon",
          location: "Various Locations",
          description:
            "We are looking for a Warehouse Associate to join our team. You will be responsible for receiving, storing, and shipping merchandise in our warehouse.",
        },
      ],
    },
  ];
  
  const [showOpportunities, setShowOpportunities] = useState(null);

  const handleShowOpportunities = (id) => {
    setShowOpportunities((prev) => prev === id ? null : id);
  };

  return (
    <div className="job-opportunities container">
      <h2>JOB OPPORTUNITIES</h2>
      <div className="categories">
        {jobOpportunities.map((category) => (
          <div className="category" key={category.id}>
            <h3>{category.title}</h3>
            <button className="toggle-btn" onClick={() => handleShowOpportunities(category.id)}>
              {showOpportunities === category.id ? 'Hide ' : 'Show '}
            </button>
            {showOpportunities === category.id && (
              <div className="opportunities">
                {category.opportunities.map((opportunity) => (
                  <div className="card" key={opportunity.title}>
                    <h4>{opportunity.title}</h4>
                    <p className="company">{opportunity.company}</p>
                    <p className="location">{opportunity.location}</p>
                    <p className="description">{opportunity.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobOpportunities;
