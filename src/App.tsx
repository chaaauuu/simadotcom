import { useState, useEffect } from 'react'
import './App.css'
import { loadContent } from '@/utils/loadContent'
import type { PortfolioContent } from '@/types/content'
import Header from './components/ui/Header'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import ArtPractice from './components/sections/ArtPractice'

function App() {
  const [content, setContent] = useState<PortfolioContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadContent()
      .then(setContent)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className='app-container'>
        <div className='app-content'>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='app-container'>
        <div className='app-content'>
          <p>Error loading content: {error}</p>
        </div>
      </div>
    )
  }

  if (!content) return null

  return (
    <div className='app-container'>
      <div className='app-content'>
        <Header />
        <About data={content.about} />
        <Experience data={content.experience} />
        <Education data={content.education} />
        <ArtPractice data={content.artPractice} />
        <footer className='app-footer'>
          <p>2026</p>
        </footer>
      </div>
    </div>
  )
}

export default App
