import { LockOutlined } from "@mui/icons-material";
import { Alert, Avatar, Box, Button, Card, CardContent, Checkbox, Container, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Forgot() {

    const navigate = useNavigate()
    
    const handleSubmit = (event: any) => {
        event.preventDefault();
        navigate("/confirmation")
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
    };

    return <Container sx={{ mt: 10 }} component="main" maxWidth="xs">
        <Avatar sx={{ m: "auto", mb: 4, bgcolor: 'secondary.main' }}>
            <LockOutlined />
        </Avatar>
        <Alert className="mx-auto mb-3 border" sx={{ bgcolor: "white" }} severity="info">
            Please provide the email address.
            we will send you a confirmation link on your email address.
        </Alert>
        <Card>
            <CardContent className="px-20 py-12">
                <Typography align="center" variant="subtitle1">

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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send Confirmation Link
                    </Button>

                </Box>
            </CardContent>
        </Card>
    </Container>

}