import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites.tsx';
import Home from './pages/Home/Home.tsx';
import App from './App.tsx';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryCient } from './helpers/query-client.helper.ts';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryCient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
