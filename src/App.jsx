import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { Team, HomePage, Newsletter, Gallery, Events, Projects, Blog, About, Error } from './pages/index'
import { LoginAdmin, DashboardAdmin, BlogsAdmin, GalleryAdmin, ProjectsAdmin, EventsAdmin, TeamAdmin, Profile } from './admin/pages/index'
import AdminLayout from './admin/components/AdminLayout';
import ScrollToTop from './hooks/useScrollToTop';
import AboutPartners from './pages/About/About_Partners';

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
            <About />
          </Layout>
        } />
        <Route path="/about_partners" element={
          <Layout>
            <AboutPartners />
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
        <Route path="/news/:topicSlug" element={
          <Layout>
            <Blog />
          </Layout>
        } />

        <Route path="*" element={
          <Layout>
            <Error />
          </Layout>
        } />


        {/* Admin Routes */}
        <Route path="/admin" element={
          <LoginAdmin />
        } />
        <Route path="/admin/dashboard" element={
          <AdminLayout>
            <DashboardAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/blogs" element={
          <AdminLayout>
            <BlogsAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/gallery" element={
          <AdminLayout>
            <GalleryAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/projects" element={
          <AdminLayout>
            <ProjectsAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/events" element={
          <AdminLayout>
            <EventsAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/team" element={
          <AdminLayout>
            <TeamAdmin />
          </AdminLayout>
        } />
        <Route path="/admin/profile" element={
          <AdminLayout>
            <Profile />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App
