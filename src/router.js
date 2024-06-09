import Home from './Home';
import { createBrowserRouter } from 'react-router-dom';
import Create from './Create';
import App from './App';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

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
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
])

export default router;