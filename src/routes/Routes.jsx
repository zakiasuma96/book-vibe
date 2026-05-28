import { createBrowserRouter } from "react-router";
import Homepage from "../../homepage/Homepage";
import MainLayout from "../../layout/MainLayout";
import Books from "../../pages/books/Books";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,

    children:[
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: '/books',
        element: <Books/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])