import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.js'
import Blog from './components/Blog/Blog.jsx'
import Contact from './components/Contact/Contact.jsx'
import CHA from './components/Services/CHA.jsx'
import Software from './components/Services/Software.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<App/>}/>
      <Route>
        <Route  path='CHA' element={<CHA/>}/>
        <Route  path='Software' element={<Software/>}/>
      </Route>
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
