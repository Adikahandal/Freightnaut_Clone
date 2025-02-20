import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js'
import About_page from './components/About_page/About_page.jsx'
import Services from './components/Services/Services.jsx'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route path='about' element={<About_page/>}/>
      <Route path='service' element={<Services/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>
);

reportWebVitals();
