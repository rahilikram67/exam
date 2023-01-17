
import { Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import { useWindowResize } from "../hooks/useWindowResize";
import { RootState, store } from "../store";
import { toggleSideBarLeft } from "../store/utils";
import CompleteLogo from "./CompleteLogo";
import MenuClose from "./MenuClose";
import NavigationButtons from "./NavigationButtons";

const style = {
    '& .MuiDrawer-paper': {
        width: 342,
        boxSizing: 'border-box',
    }
}



export default function SidebarLeft() {
    const [xs, sm, ...temp] = useWindowResize()
    const { sidebarLeftOpen } = useSelector((state: RootState) => state.utils)
    return <Drawer
        sx={style}
        variant="persistent"
        open={sidebarLeftOpen}
    >
        <div className="flex flex-col h-[100vh] bg-gray-700">
            {!sm && <MenuClose setOpen={toggleSideBarLeft} />}
            <CompleteLogo className={sm ? "mt-10" : ""} />
            <NavigationButtons />
        </div>
    </Drawer>
}