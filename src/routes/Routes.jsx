import { createBrowserRouter } from "react-router";
import Homepage from "../../homepage/Homepage";
import MainLayout from "../../layout/MainLayout";
import Books from "../../pages/listedBooks/ListedBooks";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import BookDetails from "../../pages/bookDetails/BookDetails";

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
      },
      {
        path: '/bookDetails/:bookId',
        element: <BookDetails/>,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <ErrorPage/>
  }
])