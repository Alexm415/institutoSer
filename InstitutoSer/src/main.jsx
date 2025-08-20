import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Masdenos from "./Pages/Masdenos.jsx";
import Comunidad from "./Pages/Comunidad.jsx";
import Resume from "./Pages/Resume.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Masdenos",
        element: <Masdenos />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "Comunidad",
        element: <Comunidad />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
