import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  // Default: open mail client with prefilled content.
  // Swap this with your API/Formspree handler when ready.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:leegamer99@gmail.com?subject=Contact from TRL site&body=${body}`;
  };

  return (
    <main className="contact">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="contact-hero-copy">
            <h1>Contact Us</h1>
            <p>
              Discover answers to your questions about combining real estate and
              cryptocurrency on our innovative platform.
            </p>
          </div>
          <div className="contact-hero-art" aria-hidden>
            <img src="/contact/hero-person.png" alt="" />
          </div>
        </div>
      </section>

      {/* FORM CARD */}
      <section className="contact-form-wrap">
        <form className="contact-card" onSubmit={onSubmit}>
          <h2>Contact Us</h2>

          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Full Name"
            value={form.name}
            onChange={onChange("name")}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email Address"
            value={form.email}
            onChange={onChange("email")}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={onChange("phone")}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={6}
            placeholder="Enter Message"
            value={form.message}
            onChange={onChange("message")}
            required
          />

          <button className="btn-pill primary contact-submit" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
