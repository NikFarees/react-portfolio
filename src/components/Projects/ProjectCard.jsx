import React from 'react'

import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils'

const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.links}>
                {demo && <a href={demo} className={styles.link}>Demo</a>}
                <a href={`/project/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`} className={styles.link}>View Details</a>
            </div>
        </div>
    )
}

export default ProjectCard