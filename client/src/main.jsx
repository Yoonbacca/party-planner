import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from "./utils/auth";
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './components/login/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        index: true,
        element: Auth.checkLoggedIn() ? <Dashboard /> : <LoginPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
