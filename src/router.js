import Home from './Home';
import { createBrowserRouter } from 'react-router-dom';
import Create from './Create';
import App from './App';

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
      }
    ]
  },
])

export default router;