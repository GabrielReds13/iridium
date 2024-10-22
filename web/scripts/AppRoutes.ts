import type { Route } from "./types/Route";

const routes: Route[] = [
    {
        name: "Início",
        address: "/home"
    },
    {
        name: "Perfil",
        address: "/profile"
    },
    {
        name: "Configurações",
        address: "/settings"
    },
];


export const getRoutes = async (): Promise<Route[]> => {
    return routes;
};