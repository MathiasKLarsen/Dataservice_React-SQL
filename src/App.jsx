import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Default Navbar
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projekter from "./pages/Projekter"
import Home from "./pages/Home"
import Page404 from "./pages/Page404"

// Layout filerne
import Layout from "./layout/Layout"

// Css
import './App.css'

function App() {

  const router = createBrowserRouter (
    [
      {
        path: "/", 
        element: <Layout />, 
        // errorElement: <PageNotFound />,
        children: [
          {
            index: true, element: <Home />
          },
          {
            path: "/about", element: <About />
          },
          {
            path: "/projekter", element: <Projekter />
          },
          {
            path: "/contact", element: <Contact />
          },
          {
            path: "*", element: <Page404 />
          }
        ]
      }
    ]
  )

  return (
    <section className="container mx-auto">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
