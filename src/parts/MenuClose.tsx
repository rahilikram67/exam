import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleSideBarLeft } from "../store/utils";

interface Props {
    className?: string
    setOpen: Function
}


export default function MenuClose({ className, setOpen }: Props) {
    const dispatch = useDispatch()
    return <div className={clsx("ml-auto ml-3 mt-1", className)}>
        <IconButton onClick={() => { dispatch(setOpen(false)) }}>
            <Close fontSize="large" className="text-white" />
        </IconButton>
    </div>
}