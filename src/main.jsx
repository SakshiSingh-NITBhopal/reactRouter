import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Github, {githubData} from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
                <Route  path='/' element={<Layout />}>
                    <Route path='' element={<Home />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='contact' element={<Contact />}/>
                    <Route loader={githubData} path='github' element={<Github /> }/>
                    <Route path='user' element={<User/>}>
                        <Route path=':username' element={<User />}/>
                    </Route>

                </Route>
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
