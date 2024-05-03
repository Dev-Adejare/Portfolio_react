import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { DiAngularSimple } from "react-icons/di";


export default function Header() {
  return (
    <header>

         <DiAngularSimple /> <a href="" style={{color:'#FAC86B', fontSize: '20px', fontStyle:'Source Serif Pro', textDecoration:'none'}}>ADE</a>
     
      <nav>
      
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social">
        <a href="https://www.linkedin.com/in/sodiq-kehinde-a38448296">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/Hardejare91?mibextid=ZbWKwL">
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
