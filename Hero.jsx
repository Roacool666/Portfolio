import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Angel Chavez</h1>
          <p className={styles.description}>I am proficient in Java, Node.js, React, HTML, CSS, Figma, and Python. With 2 years
            of experience to my name.
        </p>
        <a href="mailto:achavezperez.28@gmail.com" className= {styles.contactBtn}>
            Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/Face.png")} alt="Face image of me" className= {styles.heroImg}/>
        <div className= {styles.topBlur}/>
        <div className= {styles.bottomBlur}/>
    </section>
    );
};
