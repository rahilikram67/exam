import Login from "./Auth/Login";

import { Navigate } from "react-router-dom"
import { lazy } from "react";


const Register = lazy(() => import("./Auth/Register"))
const Confirmation = lazy(() => import("./Auth/Confirmation"))
const Confirmed = lazy(() => import("./Auth/Confirmed"))
const Forgot = lazy(() => import("./Auth/Forgot"))
const NewPassword = lazy(() => import("./Auth/NewPassword"))
const PasswordChanged = lazy(() => import("./Auth/PasswordChanged"));
const Dashboard = lazy(() => import("./Dashboard/Dashboard"));

const Settings = lazy(() => import("./Dashboard/Settings"))
const PrepareExam = lazy(() => import("./Dashboard/PrepareExam"));
const SavedTemplates = lazy(() => import("./Dashboard/SavedTemplates"));




export const routes = {
    "/": <Navigate to="/login" />,
    "/forgot": <Forgot />,
    "/login": <Login />,
    "/register": <Register />,
    "/confirmation": <Confirmation />,
    "/confirmed": <Confirmed />,
    "/newpassword": <NewPassword />,
    "/passwordchanged": <PasswordChanged />,
}

export const DashboardSubRoutes = {
    parent: <Dashboard />,
    child: {
        "settings": <Settings />,
        "prepare": <PrepareExam />,
        "saved": <SavedTemplates />
    }
}