import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import DashboardPage from './pages/dashboard.tsx'
import AuthLayout from './components/AuthLayout.tsx'
import SignupPage from './pages/signup.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element:
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
      },
      {
        path: "/signup",
        element:
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
      },
      {
        path: "/dashboard",
        element: 
          <AuthLayout>
            <DashboardPage />
          </AuthLayout>
      }
    ],
  },
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
