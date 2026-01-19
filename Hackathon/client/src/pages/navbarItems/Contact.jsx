import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { createUser } from "../../apis/Api";
import Toast from "../../components/toast/Toast";
import "./home.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({ name, email, message });
      console.log("Contact form submitted:", response.data);

      setAlert({
        show: true,
        message: "Message sent successfully!",
        type: "success",
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setAlert({
        show: true,
        message: "An error occurred. Please try again.",
        type: "error",
      });
    }
  };
  const closeAlert = () => setAlert({ show: false, message: "", type: "" });
  return (
    <>
      <Header />
      <section className="contact-section">
        <iframe
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=India&ie=UTF8&t=&z=5&iwloc=B&output=embed"
          title="map"
          scrolling="no"
        ></iframe>
        <div className="contact-container">
          <div className="contact-card">
            <h2>Get in Touch</h2>
            <p>Have a question about our furniture? Send us a message and we'll get back to you promptly.</p>
            <form onSubmit={handleSubmitContact}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
            <p className="small-text">We value your feedback and inquiries. Visit our showroom for a firsthand experience of our furniture collection.</p>
          </div>
        </div>
      </section>
      <Footer />
      {alert.show && (
        <Toast message={alert.message} type={alert.type} onClose={closeAlert} />
      )}
    </>
  );
};

export default ContactUs;
