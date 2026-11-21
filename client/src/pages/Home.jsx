import { Link } from 'react-router-dom';
import { FaSeedling, FaTractor, FaLeaf, FaUserFriends, FaHandshake, FaRecycle, FaBookOpen } from 'react-icons/fa';

const focusAreas = [
  { icon: <FaSeedling />, title: 'Crop Information', description: 'Learn about different crops, their seasons and basic cultivation methods.' },
  { icon: <FaTractor />, title: 'Modern Farming', description: 'Explore modern agricultural techniques that improve productivity.' },
  { icon: <FaLeaf />, title: 'Organic Agriculture', description: 'Understand natural farming practices that protect soil and environment.' },
  { icon: <FaUserFriends />, title: 'Farming Guidance', description: 'Simple, practical guidance to help farmers make better decisions.' },
];

const reasons = [
  { icon: <FaUserFriends />, title: 'Farmer-Centric Approach', text: 'Everything we share is built around the needs of farmers.' },
  { icon: <FaBookOpen />, title: 'Practical Farming Knowledge', text: 'Clear, easy-to-apply information for everyday farm work.' },
  { icon: <FaRecycle />, title: 'Sustainable Agriculture', text: 'We promote methods that keep land healthy for future generations.' },
  { icon: <FaHandshake />, title: 'Growing Together', text: 'A community where farmers learn from and support one another.' },
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Empowering Farmers, Growing a Better Tomorrow.</h1>
          <p>
            Farmer Friends is an informational platform that shares farming knowledge,
            modern agricultural techniques and support for farmers in every season.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore More</Link>
            <Link to="/contact" className="btn btn-light">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 780 }}>
          <h2 className="section-title">Welcome to Farmer Friends</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            We believe every farmer deserves access to useful knowledge. Farmer Friends brings together
            information on crops, farming practices and sustainable methods, so that farmers can grow
            healthier crops and build a stronger future for agriculture.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Focus Areas</h2>
          <p className="section-subtitle">The key topics we cover to support farmers and farming communities.</p>
          <div className="grid">
            {focusAreas.map((area) => (
              <div className="card" key={area.title}>
                <div className="card-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Farmer Friends?</h2>
          <p className="section-subtitle">Four simple reasons farmers trust our approach.</p>
          <div className="grid">
            {reasons.map((reason) => (
              <div className="card why-item" key={reason.title} style={{ textAlign: 'left' }}>
                <div className="card-icon">{reason.icon}</div>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Let's Build a Better Future for Agriculture</h2>
          <Link to="/contact" className="btn btn-light">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
