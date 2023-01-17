import { Description, Favorite, Leaderboard, Save, SavedSearch, Settings, Upload } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const navs = [
    {
        icon: <Description className="text-white" />,
        text: "Prepare Exam",
        route: "prepare",
    },
    {
        icon: <Save className="text-white" />,
        text: "Saved Templates",
        route: "saved",
    },
    {
        icon: <Settings className="text-white" />,
        text: "Settings",
        route: "settings",
    },
]

export default function NavigationButtons() {
    const [selected, setSelected] = useState(0)
    const navigate = useNavigate()
    const location = useLocation()
    const changeRoute = (path: string, index: number) => {
        setSelected(index)
        navigate(`/dashboard/${path}`)
    }
    useEffect(() => {
        const path = location.pathname.slice(1).split("/")[1]
        if (!path) {
            navigate("/dashboard/statistics")
            setSelected(0)
        }
        else setSelected(navs.findIndex(e => e.route == path))
    }, [])
    return <List disablePadding sx={{ mt: 4 }}>
        {
            navs.map((e, index) => <ListItem key={index} disablePadding disableGutters>
                <ListItemButton onClick={() => changeRoute(e.route, index)} selected={index == selected} sx={{ color: "white", border: index == selected ? "1px solid white" : "", borderRadius: 3 }}>
                    <ListItemIcon>
                        {e.icon}
                    </ListItemIcon>
                    <ListItemText primary={e.text} />
                </ListItemButton>
            </ListItem>)
        }
    </List>
}