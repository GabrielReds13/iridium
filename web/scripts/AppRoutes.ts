import type { Route } from "./types/Route";

// alter routes
export const altRoutes: Route[] = [
    {
        name: "Login",
        address: "/"
    },
    {
        name: "Criar conta",
        address: "/register"
    },
];

// default routes
const defaultRoutes: Route[] = [
    {
        name: "Início",
        address: "/home"
    },
    {
        name: "Progresso",
        address: "/progress"
    },
    {
        name: "Configurações",
        address: "/settings"
    },
];

// export routes
export const getRoutes = async (
    type: string, 
    routeName?: string
): Promise<Route[]> => {
    // return
    // all default routes
    if(type === "default") return defaultRoutes;

    // all alter routes
    else if (type === "alt") return altRoutes;

    // specific route
    else if (type === "request") {
        // All routes
        let allRoutes: Route[] = new Array();
        allRoutes = allRoutes.concat(defaultRoutes, altRoutes);

        // find request route
        const findRoute = allRoutes.find(route => route.name === routeName);

        // return
        return [findRoute!];
    }
    else return [];
};