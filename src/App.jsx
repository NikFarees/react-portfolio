import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import ProjectDetail from './components/Projects/ProjectDetail'

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App