import { FaLinkedin, FaGithub  } from "react-icons/fa";
import './style.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="footer__content">
          <span>© 2025 Tiago Dariel. All rights reserved.</span>
          <ul className="social-links">
            <li className="social-link">
              <a href="https://www.linkedin.com/in/tiago-dariel-a7904a144/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
            </li>
            
            <li className="social-link">
              <a href="https://github.com/tiagodariel" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;