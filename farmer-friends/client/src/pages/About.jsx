import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Growing Together, Farming Better.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>About Farmer Friends</h2>
            <p>
              Farmer Friends is an informational platform created to support farmers, students and
              anyone interested in agriculture. We share simple, reliable knowledge about crops,
              farming methods and sustainable practices.
            </p>
            <p>
              Our goal is to make useful farming information easy to find and easy to understand,
              so that it can be applied in real fields.
            </p>

            <h3>Our Mission</h3>
            <p>To share practical agricultural knowledge that helps farmers improve their yield and livelihood.</p>

            <h3>Our Vision</h3>
            <p>A future where farming is productive, sustainable and supported by a strong farming community.</p>

            <h3>Our Commitment to Farmers</h3>
            <p>
              We are committed to keeping our content simple, honest and respectful of local farming
              traditions, while encouraging environmentally friendly methods.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 14 }}>Contact Us</Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=80"
            alt="Tractor working in an agricultural field"
          />
        </div>
      </section>
    </>
  );
}

export default About;
