import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
 
import HomePage from './pages/Home/HomePage'
import LoginFunction from './pages/Login/Login'
import RootLayout from './pages/Root'
import About from './pages/About/About'

const router = createBrowserRouter ([
  {
    path:'/', 
    element: <RootLayout/>,
    children: [
      {path: '/', element: <HomePage/>},
      {path: '/login', element: <LoginFunction/>},
      {path: '/about', element: <About/>},
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
