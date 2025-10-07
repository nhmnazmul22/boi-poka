import { createBrowserRouter } from "react-router";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";
import App from "../App";
import BookDetails from "../pages/BooksDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/data/books.json"),
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
