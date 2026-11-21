import { FaUserFriends, FaSeedling, FaTractor, FaLeaf, FaBullhorn } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  { icon: <FaUserFriends />, title: 'Farming Guidance', description: 'Helpful guidance for better farming practices.' },
  { icon: <FaSeedling />, title: 'Crop Information', description: 'General information about different crops and cultivation.' },
  { icon: <FaTractor />, title: 'Modern Farming Techniques', description: 'Introduction to modern agricultural methods.' },
  { icon: <FaLeaf />, title: 'Organic Farming', description: 'Promoting sustainable and environmentally friendly farming.' },
  { icon: <FaBullhorn />, title: 'Agricultural Awareness', description: 'Sharing useful agricultural knowledge and awareness.' },
];

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Informational resources to help you farm smarter.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-subtitle">
            These are informational service descriptions. Farmer Friends shares general knowledge and
            does not provide professional advisory services.
          </p>
          <div className="grid">
            {services.map((service) => (
              <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
