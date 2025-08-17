import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MethodList from './components/MethodList';
import JestMethodExample from './components/JestMethodExample';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MethodList />,
  },
  {
    path: '/method/:name',
    element: <JestMethodExample />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
