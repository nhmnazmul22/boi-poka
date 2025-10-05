import { createBrowserRouter } from "react-router";
import NotFound from "../pages/Errors/NotFound";
import Home from "../pages/Home/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
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
