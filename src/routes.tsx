import { createBrowserRouter } from 'react-router-dom'

import { Service } from './pages/app/service/service'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { NotFound } from './pages/404'
import { Status } from './pages/app/status/status'

export const router = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Service /> },
      { path: '/status', element: <Status /> },
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
