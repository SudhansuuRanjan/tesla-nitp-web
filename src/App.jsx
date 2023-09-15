import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { Team, HomePage, Newsletter, Gallery, Events, Projects, Blog, About, Error, Resources } from './pages/index'
import { LoginAdmin, DashboardAdmin, BlogsAdmin, GalleryAdmin, ProjectsAdmin, EventsAdmin, TeamAdmin, Profile, Register, EditData } from './admin/pages/index'
import AdminLayout from './admin/components/AdminLayout';
import ScrollToTop from './hooks/useScrollToTop';
import AboutPartners from './pages/About/About_Partners';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateComponent';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateCounter } from './services/counter';
import ErrorBoundary from './utils/ErrorBoundary';

const queryClient = new QueryClient()

function App() {

  const counter = async () => {
    await UpdateCounter();
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    counter();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <ErrorBoundary>
        <Router>
          <AuthProvider>
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

              <Route path="/resources/:type" element={
                <Layout>
                  <Resources />
                </Layout>
              } />

              <Route path="*" element={
                <Layout>
                  <Error />
                </Layout>
              } />


              {/* Admin Routes */}
              <Route path="/admin/login" element={
                <LoginAdmin />
              } />
              {/* <Route path="/admin/register" element={
              <Register />
            } /> */}

              <Route path="/admin/dashboard" element={<PrivateRoute />} >
                <Route path="/admin/dashboard" element={
                  <AdminLayout>
                    <DashboardAdmin />
                  </AdminLayout>
                } />
              </Route>

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

              <Route path="/edit/:type/:id" element={
                <AdminLayout>
                  <EditData />
                </AdminLayout>
              } />
            </Routes>
          </AuthProvider>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
  )
}

export default App
