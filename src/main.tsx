import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.tsx'
import DashboardPage from './pages/dashboard.tsx'
import AuthLayout from './components/AuthLayout.tsx'
import SignupPage from './pages/signup.tsx'
import store from './store/store.ts'
import Home from './pages/home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>

      },
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
          <AuthLayout authentication>
            <DashboardPage />
          </AuthLayout>
      }
    ],
  },
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
