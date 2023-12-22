
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routers from './routes/Router/Router'

function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
