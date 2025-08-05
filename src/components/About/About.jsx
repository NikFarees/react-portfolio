import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in React, JavaScript, HTML, and CSS.
                                I create responsive, user-friendly web applications with modern design principles.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I develop robust server-side applications and APIs using Node.js, Python, and database
                                technologies. I focus on building scalable and secure backend systems.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui" />
                        <div className={styles.aboutItemText}>
                            <h3>Mobile & System Developer</h3>
                            <p>
                                I build cross-platform mobile applications and system solutions.
                                I work with various technologies to deliver comprehensive software solutions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About