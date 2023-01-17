import { LockOutlined } from "@mui/icons-material";
import { Alert, Avatar, Card, CardContent, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Confirmed() {

    return <Container sx={{ mt: 10 }} component="main" maxWidth="xs">
        <Avatar sx={{ m: "auto", mb: 4, bgcolor: 'secondary.main' }}>
            <LockOutlined />
        </Avatar>

        <Alert severity="success" sx={{ bgcolor: "white" }}>
            Your
            account has been successfully verified please <Link className="text-blue-400" to="/login">login</Link> to your account
        </Alert>

    </Container>

}