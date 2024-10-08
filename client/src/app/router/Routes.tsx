import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import HomePage from '../../features/Home/HomePage';
import ContactPage from '../../features/contact/ContactPage';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'catalog/:id', element: <ProductDetails /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'server-error', element: <ServerError /> },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate replace to="not-found" /> },
    ],
  },
]);
