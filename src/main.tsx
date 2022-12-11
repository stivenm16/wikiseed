import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./routes/Landing/Landing";
import Login from "./routes/Login/Login";

const router = createBrowserRouter([
  {
    path: "/wikiseed/",
    element: <Landing />,
  },
  {
    path: "/wikiseed/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
