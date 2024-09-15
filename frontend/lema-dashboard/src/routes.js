import Dashboard from "views/Dashboard.js";
import Presupuestos from "views/Presupuestos.js";
import Precios from "views/Precios.js";
import Pedidos from "views/Pedidos.js";
import Entregados from "views/Entregados";
import Ventas from "views/Ventas";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Nuevo Presupuesto",
    icon: "tim-icons icon-align-left-2",
    component: <Presupuestos />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Ventas",
    icon: "tim-icons icon-bank",
    component: <Ventas />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Nuevo Pedido",
    icon: "tim-icons icon-puzzle-10",
    component: <Pedidos />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Entregados",
    icon: "tim-icons icon-puzzle-10",
    component: <Entregados />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Precios",
    icon: "tim-icons icon-align-center",
    component: <Precios/>,
    layout: "/admin",
  },
];
export default routes;
