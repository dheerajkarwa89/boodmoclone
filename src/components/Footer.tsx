import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h6>About Us</h6>
            <p style={{ fontSize: '0.9rem' }}>
              We provide genuine car spare parts online at the best prices in India. Fast delivery and wide selection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="https://google.com" className="text-white text-decoration-none">Home</a></li>
              <li><a href="https://google.com" className="text-white text-decoration-none">My Orders</a></li>
              <li><a href="https://google.com" className="text-white text-decoration-none">Support</a></li>
              <li><a href="https://google.com" className="text-white text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h6>Contact</h6>
            <p style={{ fontSize: '0.9rem' }}>
              📞 +91 98765 43210<br />
              ✉️ support@boodmoclone.com
            </p>
            <div>
              {/* Replace with real icons or font-awesome later */}
              <span className="me-2">🌐</span>
              <span className="me-2">📘</span>
              <span className="me-2">🐦</span>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center mb-0" style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Boodmo Clone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;