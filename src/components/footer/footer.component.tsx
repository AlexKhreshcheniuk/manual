import logo from '../../assets/images/hero-app-logo.svg';
import socialFacebook from '../../assets/images/social-facebook.svg';
import socialGoogle from '../../assets/images/social-google.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

import './footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <img src={logo} className="footer__logo" alt="logo" />
        <ul className="footer__list">
          <li className="footer__list-first-item">Product</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Guided</li>
          <li>Products</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-first-item">Company</li>
          <li>Press</li>
          <li>Mission</li>
          <li>Strategy</li>
          <li>About</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-first-item">Info</li>
          <li>Support</li>
          <li>Customer Service</li>
          <li>Get started</li>
        </ul>
        <div className="footer__list">
          <div className="footer__list-first-item">Follow us</div>
          <img src={socialFacebook} className="footer__social-icon" alt="logo" />
          <img src={socialGoogle} className="footer__social-icon" alt="logo" />
          <img src={socialTwitter} className="footer__social-icon" alt="logo" />
        </div>
      </div>
      <div className="footer__rights">
        © 2025 Manual. All rights reserved
      </div>
    </div>
  );
}
