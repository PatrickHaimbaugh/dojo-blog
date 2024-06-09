import Home from './Home';
import { createBrowserRouter } from 'react-router-dom';
import Create from './Create';
import App from './App';
import BlogDetails from './BlogDetails';

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
        path: "/create",
        element: <Create />
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />
      }
    ]
  },
])

export default router;