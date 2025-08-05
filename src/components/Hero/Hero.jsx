import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, Im Nik Farees</h1>
                <p className={styles.description}>
                    I'm a software developer with expertise in building dynamic web applications, 
                    mobile solutions, and robust systems. I love creating innovative digital experiences 
                    using modern technologies.
                </p>
                <a className={styles.contactBtn} href="mailto:nikfarees2015@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Him" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}

export default Hero
