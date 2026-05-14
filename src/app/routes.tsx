import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { NosotrosPage } from "./pages/NosotrosPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ContactoPage } from "./pages/ContactoPage";

const routes = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "servicios", Component: ServicesPage },
      { path: "nosotros", Component: NosotrosPage },
      { path: "proyectos", Component: ProyectosPage },
      { path: "contacto", Component: ContactoPage },
    ],
  },
];

function routerBasename(): string | undefined {
  const baseUrl = import.meta.env.BASE_URL;
  if (!baseUrl || baseUrl === "/") return undefined;
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

const basename = routerBasename();

export const router = createBrowserRouter(
  routes,
  basename ? { basename } : {},
);