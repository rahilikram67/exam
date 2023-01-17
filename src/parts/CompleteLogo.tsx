import { Avatar } from "@mui/material";
import Logo from "../assets/logo.png"
interface Props {
    className?: string
}
export default function CompleteLogo({ className="" }: Props) {
    return <div className={`flex justify-center items-center ${className}`}>
        <Avatar src={Logo} sx={{
            height: 50,
            width: 50
        }} />
        <span className="text-4xl ml-1 font-serif text-white">XAMINAR</span>
    </div>
}