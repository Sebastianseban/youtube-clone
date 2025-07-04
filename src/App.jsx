import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }

]
}])

function App() {


  return (
    <>
    <Header/>
    <RouterProvider router={appRouter}/>

    </>
  )
}

export default App
