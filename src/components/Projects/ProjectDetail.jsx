import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './ProjectDetail.module.css'
import { getImageUrl } from '../../utils'
import projects from '../../data/projects.json'

const ProjectDetail = () => {
    const { projectId } = useParams()
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const project = projects.find(p =>
        p.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === projectId
    )

    const handleBackToProjects = () => {
        navigate('/')
        setTimeout(() => {
            const projectsSection = document.getElementById('projects')
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    const nextImage = () => {
        if (project.detailedInfo?.images) {
            setCurrentImageIndex((prev) =>
                (prev + 1) % project.detailedInfo.images.length
            )
        }
    }

    const prevImage = () => {
        if (project.detailedInfo?.images) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? project.detailedInfo.images.length - 1 : prev - 1
            )
        }
    }

    if (!project) {
        return (
            <div className={styles.container}>
                <h1>Project Not Found</h1>
                <button onClick={() => navigate('/')} className={styles.backBtn}>
                    Back to Home
                </button>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <button onClick={handleBackToProjects} className={styles.backBtn}>
                ← Back to Projects
            </button>

            <div className={styles.content}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <div className={styles.heroLeft}>
                        <img
                            src={getImageUrl(project.imageSrc)}
                            alt={`${project.title} screenshot`}
                            className={styles.heroImage}
                        />
                    </div>

                    <div className={styles.heroRight}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.title}>{project.title}</h1>

                            <div className={styles.aboutSection}>
                                <h2 className={styles.subtitle}>About the Project</h2>
                                <p className={styles.description}>{project.description}</p>
                            </div>

                            <div className={styles.techSection}>
                                <div className={styles.technologiesSection}>
                                    <h3>Technologies Used</h3>
                                    <ul className={styles.heroSkillsList}>
                                        {project.skills.map((skill, index) => (
                                            <li key={index} className={styles.heroSkill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Slider - Only show if images exist */}
                {project.detailedInfo?.images && project.detailedInfo.images.length > 0 && (
                    <div className={styles.imageSlider}>
                        <div className={styles.sliderImageContainer}>
                            {project.detailedInfo.images.length > 1 && (
                                <button onClick={prevImage} className={styles.sliderBtn}>
                                    ‹
                                </button>
                            )}
                            <img
                                src={getImageUrl(project.detailedInfo.images[currentImageIndex])}
                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                className={styles.sliderImage}
                            />
                            {project.detailedInfo.images.length > 1 && (
                                <button onClick={nextImage} className={styles.sliderBtn}>
                                    ›
                                </button>
                            )}
                            <div className={styles.imageInfo}>
                                {currentImageIndex + 1} / {project.detailedInfo.images.length}
                            </div>
                        </div>
                        {project.detailedInfo.images.length > 1 && (
                            <div className={styles.imageIndicators}>
                                {project.detailedInfo.images.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${styles.indicator} ${index === currentImageIndex ? styles.active : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Project Links */}
                <div className={styles.bottomLinksSection}>
                    <div className={styles.heroLinks}>
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
                                View Demo
                            </a>
                        )}
                        {project.source && (
                            <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
                                View Source Code
                            </a>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectDetail