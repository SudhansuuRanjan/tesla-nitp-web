import { useEffect } from 'react'
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UpdateCounter } from './services/counter';
import ErrorBoundary from './utils/ErrorBoundary';

const queryClient = new QueryClient();

const userRoutes = [
  {
    path: "/",
    component: <HomePage />,
    id: 1,
  },
  {
    path: "/gallery",
    component: <Gallery />,
    id: 2,
  },
  {
    path: "/team",
    component: <Team />,
    id: 3,
  },
  {
    path: "/about",
    component: <About />,
    id: 4,
  },
  {
    path: "/about_partners",
    component: <AboutPartners />,
    id: 5,
  },
  {
    path: "/events",
    component: <Events />,
    id: 6,
  },
  {
    path: "/projects",
    component: <Projects />,
    id: 7,
  },
  {
    path: "/news",
    component: <Newsletter />,
    id: 8,
  },
  {
    path: "/news/:topicSlug",
    component: <Blog />,
    id: 9,
  },
  {
    path: "/resources/:type",
    component: <Resources />,
    id: 10,
  },
  {
    path: "*",
    component: <Error />,
    id: 11,
  },
]

const adminProtectedRoutes = [
  {
    path: "/admin/dashboard",
    component: <DashboardAdmin />,
    id: 1,
  },
  {
    path: "/admin/blogs",
    component: <BlogsAdmin />,
    id: 2,
  },
  {
    path: "/admin/gallery",
    component: <GalleryAdmin />,
    id: 3,
  },
  {
    path: "/admin/projects",
    component: <ProjectsAdmin />,
    id: 4,
  },
  {
    path: "/admin/events",
    component: <EventsAdmin />,
    id: 5,
  },
  {
    path: "/admin/team",
    component: <TeamAdmin />,
    id: 6,
  },
  {
    path: "/admin/profile",
    component: <Profile />,
    id: 7,
  },
  {
    path: "/edit/:type/:id",
    component: <EditData />,
    id: 8,
  }
]

function App() {

  const counter = async () => {
    await UpdateCounter();
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scrollTo(0, 1);
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
              {/* User Routes */}
              <Route path='/' element={<Layout />}>
                {
                  userRoutes.map((route) => (
                    <Route key={route.id} path={route.path} element={
                      route.component ? route.component : <Error />
                    } />
                  ))
                }
              </Route>


              {/* Admin Routes */}
              <Route path="/admin/login" element={
                <LoginAdmin />
              } />

              {/* <Route path="/admin/register" element={
              <Register />
              } /> */}

              {/* Admin Protected Routes */}
              <Route path='/' element={<AdminLayout />}>
                {
                  adminProtectedRoutes.map((route) => (
                    <Route key={route.id} path={route.path} element={<PrivateRoute />} >
                      <Route path={route.path} element={
                        route.component ? route.component : <Error />
                      } />
                    </Route>
                  ))
                }
              </Route>

            </Routes>
          </AuthProvider>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider >
  )
}

export default App
