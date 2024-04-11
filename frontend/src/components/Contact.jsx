 

/* import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          contact,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setContact("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="contact">
      
      <div className="banner">
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>Connect with us</h2>
            <p>"Reach out to us today and take the first step towards your international career!"</p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(Number(e.target.value))}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
 */


 

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("handleSendMessage called");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact.toString()); // Convert number to string
    formData.append("message", message);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          // Do not set Content-Type here, Axios will set it automatically for FormData
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setContact("");
    } catch (error) {
      toast.error(error.response?.data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact">
      <div className="banner">
        <div className="item">
          <form onSubmit={handleSendMessage}>
            <h2>Connect with us</h2>
            <p>"Reach out to us today and take the first step towards your international career!"</p>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(Number(e.target.value))}
                required
              />
            </div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
