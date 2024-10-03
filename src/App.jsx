import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AppLayout, HomePage, Login, Pricing, Product, Root } from "./Pages";
import { CityList, CountryList, Form, City } from './Components/index'
import { CityProvider } from "./Context /CityContext";


const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: 'app',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate replace to="cities" />

        },
        {
          path: 'cities',
          element: <CityList />
        },
        {
          path: 'cities/:id',
          element: <City />
        },
        {
          path: 'countries',
          element: <CountryList />
        },
        {
          path: 'form',
          element: <Form />
        }
      ]
    }

  ]
}])

function App() {
  return <CityProvider>
    <RouterProvider router={router} />
  </CityProvider>
}

export default App;
