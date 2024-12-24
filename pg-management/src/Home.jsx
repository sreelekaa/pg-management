import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from './assets/La Villa.png';
import image1 from './assets/room.png';
import image2 from './assets/room1.png';
import image3 from './assets/room2.png';
import image4 from './assets/room3.jpg';
import image5 from './assets/room4.webp';
import fontPath from './assets/CinzelDecorative-Regular.ttf';

const images = [
  image1, image2, image3, image4, image5
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const fontFace = `
      @font-face {
        font-family: 'MyCustomFont';
        src: url('${fontPath}') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `;
    styleSheet.insertRule(fontFace, styleSheet.cssRules.length);
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
          <h2 style={styles.logoText}>La Villa</h2>
        </div>
        <nav style={styles.nav}>
          <Link to="/home" style={styles.navLink}>Home</Link>
          <Link to="/bookings" style={styles.navLink}>Bookings</Link>
          <Link to="/request" style={styles.navLink}>Request</Link>
        </nav>
      </header>
      <div style={styles.frame}>
        <div style={{ ...styles.background, backgroundImage: `url(${images[currentImage]})` }}>
          <button onClick={() => window.location.href = '/bookings'} style={styles.bookNowButton}>
            Book Now
          </button>
        </div>
      </div>
      <div style={styles.about}>
        <h2 style={styles.heading}> La Villa</h2>
        <p>
          Welcome to our PG house! We offer the best accommodation with all the necessary amenities.
          Our rooms are spacious, clean, and comfortable, ensuring a pleasant stay for all our guests.
          We provide high-speed internet, 24/7 security, regular housekeeping, and much more.
        </p>
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>Follow Us</h3>
            <div style={styles.socialIcons}>
              <a href="https://instagram.com" style={styles.socialLink}><FaInstagram /></a>
              <a href="https://facebook.com" style={styles.socialLink}><FaFacebook /></a>
              <a href="https://twitter.com" style={styles.socialLink}><FaTwitter /></a>
            </div>
          </div>
          <div style={{ ...styles.footerSection, textAlign: 'center' }}>
            <h3 style={styles.footerTitle}>Contact Us</h3>
            <p>&copy; 2024 La Villa</p>
            <p>Contact: +1234567890</p>
            <p>Address: 123 PG House St., City, Country</p>
          </div>
          <div style={styles.footerSectionRight}>
            <h3 style={styles.footerTitle}>Subscribe</h3>
            <form style={styles.newsletterForm}>
              <input type="email" placeholder="Your email" style={styles.newsletterInput} />
              <button type="submit" style={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    backgroundColor: '#ffe6f0',
    borderBottom: '1px solid #f4a1c5',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    color: '#8b002f',
    margin: 0,
    fontFamily: 'MyCustomFont, sans-serif',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#8b002f',
    fontSize: '16px',
  },
  frame: {
    height: '50%',
    flex: '1 0 auto',
    position: 'relative',
    overflow: 'hidden',
  },
  background: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-image 1s ease-in-out',
  },
  bookNowButton: {
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#8b002f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  heading: {
    padding: '20px',
    backgroundColor: '#ffe6f0',
    color: '#8b002f',
    textAlign: 'center',
    fontFamily: 'MyCustomFont, sans-serif',
  },
  about: {
    padding: '20px',
    backgroundColor: '#ffe6f0',
    color: '#8b002f',
    textAlign: 'center',
  },
  footer: {
    height: '15%',
    backgroundColor: '#ffe6f0',
    borderTop: '1px solid #f4a1c5',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',
  },
  footerContent: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  footerSection: {
    flex: '1',
    minWidth: '150px',
    padding: '10px',
    boxSizing: 'border-box',
  },
  footerSectionRight: {
    flex: '1',
    minWidth: '150px',
    padding: '10px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  footerTitle: {
    fontSize: '16px',
    color: '#8b002f',
    marginBottom: '5px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialLink: {
    fontSize: '24px',
    color: '#8b002f',
    textDecoration: 'none',
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  newsletterInput: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #f4a1c5',
    marginBottom: '5px',
  },
  newsletterButton: {
    padding: '8px 16px',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#8b002f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Home;
