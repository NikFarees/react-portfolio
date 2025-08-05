import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, Im Nik</h1>
                <p className={styles.description}>Im a website and mobile developers</p>
                <a className={styles.contactBtn} href="mailto:nikfarees2015@gmail.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Him" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />

        </section>
    )
}

export default Hero
