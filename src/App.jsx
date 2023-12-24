
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routers from './routes/Router/Router'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster></Toaster>
    </>
  )
}

export default App
