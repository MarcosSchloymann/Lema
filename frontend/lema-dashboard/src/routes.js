import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

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
    name: "Presupuestar",
    icon: "tim-icons icon-align-left-2",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Ventas",
    icon: "tim-icons icon-bank",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Pedidos",
    icon: "tim-icons icon-puzzle-10",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Entregados",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Precios",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
];
export default routes;
