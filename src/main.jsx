import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <QueryClientProvider client={queryClient}>
    <AuthProviders>
    <RouterProvider router={Routes}></RouterProvider>
    </AuthProviders>
    </QueryClientProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
