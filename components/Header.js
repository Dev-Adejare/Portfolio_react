import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <img src="/img/logo.png" alt="logo" />
      <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social">
        <a href="https://www.linkedin.com/in/sodiq-kehinde-a38448296">
          <FaLinkedin />
        </a>
        <a href="https://www.">
          <FaFacebook />
        </a>
        <a href="https://github.com/Dev-Adejare">
          <FaGithub />
        </a>

        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FAdejare_sodiq02">
          <FaXTwitter />
        </a>
      </div>
    </header>
  );
}
