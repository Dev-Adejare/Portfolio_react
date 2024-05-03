import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>KEHINDE SODIQ</span><br />Full-stack Software developer,<br />code enthusiast and Civil Engineer</p>
        <a href="https://eu.docworkspace.com/d/sICfa25O6AbC1tbEG">RESUME</a>
      </div>
      <div>
        <img style={{borderRadius: '10px'}} src="/img/kenn.png" alt=""/>
      </div>
    </section>
  );
}