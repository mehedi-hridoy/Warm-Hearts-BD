import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css'
import 'aos/dist/aos.css'
import { RouterProvider } from "react-router-dom"
import AuthProvider from './Provider/AuthProvider'
import router from './routes/Router.jsx'
import AOS from 'aos'

export const AppRouter = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 900,
      easing: 'ease-out-quad',
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
)
