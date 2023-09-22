import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Explore from "../pages/explore";
import Notifications from "../pages/notifications";
import MainLayout from "../layouts/main";
import Messages from "../pages/message";
import Lists from "../pages/lists";
import Bookmark from "../pages/bookmarks";
import Communities from "../pages/communities";
import Profile from "../pages/profile";
import NotFound from "../pages/not-found";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "lists",
        element: <Lists />,
      },
      {
        path: "bookmarks",
        element: <Bookmark />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: "/:slug",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
