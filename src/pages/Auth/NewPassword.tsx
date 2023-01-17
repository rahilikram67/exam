
import {
    Avatar,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Card,
    CardContent,
} from "@mui/material"

import { LockOutlined } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function NewPassword() {
    const navigate = useNavigate()
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate("/passwordchanged")
    };

    return <Container sx={{ py: 8 }} component="main" maxWidth="xs">
        <Card>
            <CardContent>
                <Avatar sx={{ m: "auto", bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography align="center" component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Confirm Password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        color="info"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Change Password
                    </Button>
                </Box>
                <Copyright sx={{ mt: 4 }} />
            </CardContent>
        </Card>
    </Container>

}