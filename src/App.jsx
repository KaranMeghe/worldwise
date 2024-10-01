import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout, HomePage, Login, Pricing, Product, Root } from "./Pages";
import { CityList, CountryItem, Form } from './Components/index'


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
          element: <CityList />
        },
        {
          path: 'cities',
          element: <CityList />
        },
        {
          path: 'countries',
          element: <CountryItem />
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
  return <RouterProvider router={router} />;
}

export default App;
