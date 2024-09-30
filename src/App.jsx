import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, Login, Pricing, Product, Root } from "./Pages";


const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  children:[
  { 
  index: true,
  element: <HomePage/>,
  },
  {
    path: '/pricing',
    element: <Pricing/>
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/login',
    element: <Login/>
  }

  ]
}])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
