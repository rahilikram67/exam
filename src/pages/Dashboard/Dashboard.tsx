
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import SidebarLeft from "../../parts/SidebarLeft";
import CustomToolbar from "../../parts/Toolbar";
import { RootState } from "../../store";


export default function Dashboard() {
    const { sidebarLeftOpen } = useSelector((state: RootState) => state.utils)

    return <Grid container>
        <Grid item md={sidebarLeftOpen ? 3 : 0}>
            <SidebarLeft />
        </Grid>
        <Grid item md={sidebarLeftOpen ? 9 : 12} className="h-[100vh] w-full ">
            <CustomToolbar />
            <Outlet />
        </Grid>
    </Grid>
}