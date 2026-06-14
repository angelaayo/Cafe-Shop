// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './Context/CartProvider'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import routes from './routes'
const router = createBrowserRouter(routes);



createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router}/>
  </CartProvider>
)