import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import GamePage from "./pages/GamePage.jsx";
import Homepage from "./pages/Homepage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import themes from "./themes/themes.js";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "gamepage/:theme",
          element: <GamePage />,
          loader: (route) => {
            const theme = route.params.theme;
            return themes[theme];
          },
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: "/hackaton-puzzlegame", // Base path GitHub Pages
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
