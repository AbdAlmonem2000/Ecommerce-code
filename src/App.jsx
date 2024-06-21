import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import UserContextProvider from './Context/userContext';
import ProdcuttedRoute from './components/prodcutedRout/ProdcuttedRoute';
import ProductDatals from './components/ProductDatals/ProductDatals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProductHome from './components/ProductHome/ProductHome';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';
import BrandDatals from './components/BrandDatals/BrandDatals';


 






let query = new QueryClient();


let router = createBrowserRouter([
  {
    path: '/Ecommerce/', element: <Layout />, children: [
      { index: true, element: <ProdcuttedRoute><Home /></ProdcuttedRoute> },
      { path: 'products', element: <ProdcuttedRoute><Products /></ProdcuttedRoute> },
      { path: 'cart', element: <ProdcuttedRoute><Cart /></ProdcuttedRoute> },
      { path: 'brands', element: <ProdcuttedRoute><Brands /></ProdcuttedRoute> },
      // { path: 'categories', element: <ProdcuttedRoute><Categories /></ProdcuttedRoute> },  
      { path: 'productdetals/:id/:category', element: <ProdcuttedRoute><ProductDatals /></ProdcuttedRoute> },
      { path: 'branddatals/:id', element: <ProdcuttedRoute><BrandDatals /></ProdcuttedRoute> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <Notfound /> },
    ]
  }
])
function App() {

  return <CartContextProvider>
  <QueryClientProvider client={query}>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
      <ReactQueryDevtools/>
    </UserContextProvider>
  </QueryClientProvider>
  </CartContextProvider>


}

export default App
