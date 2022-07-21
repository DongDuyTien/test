import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
//
import Login from "./pages/Login";
import NotFound from "./pages/Page404";
import Register from "./pages/Register";
import DashboardApp from "./pages/DashboardApp";
import Reset from "./pages/Reset";
import MyDevice from "./pages/MyDevice";
import FormAddDevice from "./pages/FormAddDevice";
import Room from "./pages/Room";

// ----------------------------------------------------------------------

export default function Router() {
	return useRoutes([
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{ path: "app", element: <DashboardApp /> },
				{ path: 'room', element: <Room /> },
				{ path: "device", element: <FormAddDevice /> },
				{ path: "device/:id", element: <MyDevice /> },
			],
		},
		{
			path: "/",
			element: <LogoOnlyLayout />,
			children: [
				{ path: "/", element: <Navigate to='/dashboard/app' /> },
				{ path: "login", element: <Login /> },
				{ path: "register", element: <Register /> },
				{ path: "reset", element: <Reset /> },
				{ path: "404", element: <NotFound /> },
				{ path: "*", element: <Navigate to='/404' /> },
			],
		},
		{ path: "*", element: <Navigate to='/404' replace /> },
	]);
}
