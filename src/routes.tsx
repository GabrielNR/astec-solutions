import { createBrowserRouter } from 'react-router-dom'

import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/404'
import { Status } from './pages/app/status/status'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Home } from './pages/app/home/home'

export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/status', element: <Status /> },
      { path: '/dashboard', element: <Dashboard /> },
    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> }
    ]
  }

	// { path: '/', element: <Dashboard /> },
  // { path: '/sign-in', element: <SignIn /> },
])
