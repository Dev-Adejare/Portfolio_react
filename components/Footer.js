import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
      <div className="social">
        <div className="line"></div>
        <div className="links">
        <a href="https://www.linkedin.com/in/sodiq-kehinde-a38448296">
          <FaLinkedin />
        </a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FAdejare_sodiq02">
          <FaXTwitter />
        </a>
        
        </div>
        <div className="line"></div>
      </div>
      <h2>Thanks for scrolling🤝</h2>
    </footer>
  );
}