import React, { useState } from 'react'

import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const filterTypes = [
        { key: 'all', label: 'All' },
        { key: 'website', label: 'Websites' },
        { key: 'mobileapp', label: 'Mobile Apps' },
        { key: 'poster design', label: 'Poster Design' },
        { key: 'logo design', label: 'Logo Design' }
    ]

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.type === activeFilter)

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            
            {/* Filter Buttons */}
            <div className={styles.filterContainer}>
                {filterTypes.map((filter) => (
                    <button
                        key={filter.key}
                        className={`${styles.filterBtn} ${activeFilter === filter.key ? styles.active : ''}`}
                        onClick={() => setActiveFilter(filter.key)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className={styles.projects}> 
                {filteredProjects.map((project, id) => {
                    return (
                        <ProjectCard key={id} project={project}/>
                    );
                })}
            </div>

            {/* No Projects Message */}
            {filteredProjects.length === 0 && (
                <div className={styles.noProjects}>
                    <p>No projects found for this category.</p>
                </div>
            )}
        </section>
    )
}

export default Projects