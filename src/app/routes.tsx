import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { NosotrosPage } from "./pages/NosotrosPage";
import { ProyectosPage } from "./pages/ProyectosPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: ServicesPage },
      { path: "nosotros", Component: NosotrosPage },
      { path: "proyectos", Component: ProyectosPage },
    ],
  },
]);