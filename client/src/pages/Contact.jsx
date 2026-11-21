import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const emptyForm = { name: '', email: '', phone: '', message: '' };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Frontend-only demo: no email service is configured, so nothing is sent.
      setSubmitted(true);
      setForm(emptyForm);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We would love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-wrap">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.6rem' }}>Get in Touch</h2>
            <p style={{ marginBottom: 20 }}>
              Have a question about farming or want to know more about Farmer Friends? Send us a message.
            </p>
            <div className="card">
              <div className="card-icon"><FaEnvelope /></div>
              <div><h3>Email</h3><p>info@farmerfriends.com</p></div>
            </div>
            <div className="card">
              <div className="card-icon"><FaPhoneAlt /></div>
              <div><h3>Phone</h3><p>+91 XXXXX XXXXX</p></div>
            </div>
            <div className="card">
              <div className="card-icon"><FaMapMarkerAlt /></div>
              <div><h3>Address</h3><p>Your Location, India</p></div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="success-msg">
                Thank you! Your message has been received. We will get back to you soon.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              {errors.phone && <p className="error-text">{errors.phone}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="How can we help?" />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
