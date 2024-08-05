import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/aboutImage.png")}
            alt="Me saying Hi."
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                    src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Developer</h3>
                        <p>
                            I'm a new developer with skills to design simple websites and apps.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="Design Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Designer</h3>
                        <p>I have a keen eye for design and have experience using Figma to create wireframes and prototypes. I strive to create user-friendly and visually appealing interfaces.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/coding.png")} alt="Coding Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Coding Enthusiast</h3>
                                <p>I have an ever growing interest in coding and enjoy exploring its capabilities. I am currently learning and experimenting with React and Node.js. I am always eager to learn more and take on new challenges.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
};