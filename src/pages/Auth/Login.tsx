
import {
    Avatar,
    Button,
    CssBaseline,
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

import { Link as RouterLink, useNavigate } from "react-router-dom"

import { LockOutlined } from '@mui/icons-material';

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



export default function Login() {
    const navigate = useNavigate()
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        navigate("/dashboard")
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
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <RouterLink className="text-md text-blue-600  tracking-tight underline " to="/forgot">
                                Forgot password?
                            </RouterLink>
                        </Grid>
                        <Grid item>
                            <RouterLink className="text-md text-blue-600  tracking-tight underline " to="/register">
                                Don't have an account? Sign Up
                            </RouterLink>
                        </Grid>
                    </Grid>
                </Box>
                <Copyright sx={{ mt: 4 }} />
            </CardContent>
        </Card>
    </Container>

}