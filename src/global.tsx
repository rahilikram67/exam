import { SxProps, Theme } from "@mui/material";

export const modalStyle: SxProps<Theme> | any = {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    height: "400px",
    width: "400px",
    borderRadius: "10px",
    scrollbarWidth:"none"
}