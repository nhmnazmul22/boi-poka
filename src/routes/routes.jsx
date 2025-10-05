import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
