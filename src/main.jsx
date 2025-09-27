import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"

const router = createBrowserRouter(
    // here we provides routes
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
     <RouterProvider router={router}/>
)
