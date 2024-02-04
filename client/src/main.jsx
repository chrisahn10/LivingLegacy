import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Home from './pages/home'
import AboutUs from './pages/AboutUs'
import Feed from './pages/Feed'
import SinglePost from './pages/SinglePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <LoginForm />
      }, {
        path: '/signup',
        element: <SignupForm />
      }, {
        path: '/AboutUs',
        element: <AboutUs />
      }, {
        path: '/Feed',
        element: <Feed />
      }, {
        path: '/posts/:postId',
        element: <SinglePost />
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
