import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
function App() {

  const routes = createBrowserRouter([
    {path: "" , element: <Home/>},
    {path: "home" , element: <Home/>},
    {path: "register" , element: <Register/>},
    {path: "login" , element: <Login/>},
    {path: "*" , element: <NotFound/>},
  ])
  return (
      
      <RouterProvider router={routes}></RouterProvider>
    
    
  )
}

export default App
