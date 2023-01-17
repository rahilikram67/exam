import { MenuOpen } from "@mui/icons-material";
import { IconButton, Toolbar } from "@mui/material";
import { useEffect } from "react";
import { useWindowResize } from "../hooks/useWindowResize";
import AccountMenu from "./AccountMenu";
import clsx from "clsx"
import { toggleSideBarLeft } from "../store/utils";
import { useDispatch } from "react-redux";


export default function CustomToolbar() {
    const [xs, sm, md, lg] = useWindowResize()
    const dispatch = useDispatch()

    useEffect(() => { dispatch(toggleSideBarLeft(sm)) }, [sm])
    return <Toolbar className="bg-white border-b flex flex-row justify-between">
        {!sm && <IconButton onClick={() => dispatch(toggleSideBarLeft(true))}>
            <MenuOpen fontSize="large" />
        </IconButton>}

        <div className="ml-auto">
            <AccountMenu />
        </div>
    </Toolbar>
}