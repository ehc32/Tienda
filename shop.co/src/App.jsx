import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense } from 'react'
import Error from "./pages/Error"
import Root from "./pages/Root"
import { motion } from "framer-motion"

const Home = lazy(()=>import('./pages/Home'))
const Shop = lazy(()=>import('./pages/Shop'))
const Cart = lazy(()=>import('./pages/Cart'))
const Prodcut = lazy(()=>import('./pages/Prodcut'))

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>, 
    errorElement:<Error/>,
    children: [
      {path: "", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Home/></Suspense>},
      {path: "Shop", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Shop/></Suspense>},
      {path: "Cart", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Cart/></Suspense>},
      {path: "Shop/:name", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Prodcut/></Suspense>},
      {path: "NewArrival", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Home to='NewArrival'/></Suspense>},
      {path: "TopSelling", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Home to='TopSelling'/></Suspense>},
      {path: "OnSale", element: <Suspense fallback={<div className='mainMargin'>Cargando…</div>}><Home to='OnSale'/></Suspense>},
    ]
  },
]);



function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
