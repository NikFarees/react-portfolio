import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { getImageUrl } from '../../utils'

const ProjectCard = ({ project: { title, imageSrc, demo, source } }) => {
    const handleViewDetails = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.links}>
                <Link
                    to={`/project/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className={styles.link}
                    onClick={handleViewDetails}
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard