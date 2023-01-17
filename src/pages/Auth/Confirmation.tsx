import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Card, CardContent, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
    const email = "rahil.ikram67@gmail.com"
    const navigate = useNavigate()
    const resend = () => navigate("/forgot")

    return <Container sx={{ mt: 10 }} component="main" maxWidth="xs">
        <Avatar sx={{ m: "auto", mb: 4, bgcolor: 'secondary.main' }}>
            <LockOutlined />
        </Avatar>

        <Card>
            <CardContent className="px-20 py-12">
                <p className="font-bold text-xl text-center tracking-wide font-sans" >A verification email has been sended on your email address to <br />
                    <span className="text-blue-400">{email}</span>
                </p>
                <Typography variant="body2" className="pt-10">Click the link on you email to verify your account. If you can't find email
                    <Button sx={{
                        "&:hover": {
                            background: "transparent"
                        }
                    }} disableRipple disableElevation onClick={resend}>
                        <span className="lowercase">click here to resend</span>
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    </Container>
}