import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { Team, HomePage, Newsletter, Gallery, Events, Projects, Blog } from './pages/index'
import About from './components/HomePage/About';
import ScrollToTop from './hooks/useScrollToTop';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/gallery" element={
          <Layout>
            <Gallery />
          </Layout>
        } />
        <Route path="/team" element={
          <Layout>
            <Team />
          </Layout>
        } />
        <Route path="/about" element={
          <Layout>
           <About/>
          </Layout>
        } />
        <Route path="/events" element={
          <Layout>
            <Events />
          </Layout>
        } />
        <Route path="/projects" element={
          <Layout>
            <Projects />
          </Layout>
        } />
        <Route path="/news" element={
          <Layout>
            <Newsletter />
          </Layout>
        } />
        <Route path="/news/:newsId" element={
          <Layout>
            <Blog/>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App
