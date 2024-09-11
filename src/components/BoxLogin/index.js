import React from "react";
import Box from '@mui/material/Box';
import { alpha } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
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
const defaultTheme = createTheme();


function BoxLogin() {

    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });


    };
    return (
        <Box
            height={450}
            width={500}
            my={25}
            display="flex"
            alignItems="center"
            gap={20}
            p={0}
            marginLeft={68}
            marginTop={10}
            sx={{
                backgroundColor: theme => alpha("#34230E", 0.8),
                borderRadius: 2,

            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Typography component="h1" variant="h5"
                            sx={{
                                color: "white"

                            }}
                        >
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 3,
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: 3,
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    backgroundColor: "black",
                                    borderRadius: 3,
                                }}
                            >
                                Entrar
                            </Button>
                            <Link href="Cadastro" variant="body2"
                                sx={{
                                    color: "white"
                                }}

                            >
                                Cadastre-se aqui!
                            </Link>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </Box>
    );

}



export default BoxLogin;