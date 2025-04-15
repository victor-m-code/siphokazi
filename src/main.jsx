import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Events from './comps/Events.jsx';
import Preloader from './comps/Preloader.jsx'; // fallback

import './index.css';
import './assets/fonts/fontawesome-free-6.6.0-web/css/all.css';

// Lazy-load all pages
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Testimony = lazy(() => import('./pages/Testimony.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Preloader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Preloader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<Preloader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: '/gallery',
        element: (
          <Suspense fallback={<Preloader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Preloader />}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: '/testimony',
        element: (
          <Suspense fallback={<Preloader />}>
            <Testimony />
          </Suspense>
        ),
        children: [
          {
            path: '/testimony/:testimonyID',
            element: <Events />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
