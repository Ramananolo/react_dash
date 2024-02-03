import *as React from 'react';
import './index.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import { Checkbox, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Sign_in() {
    return (
        <Box
            component="form"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
        >
            <Container sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '65%',
                padding: '2vh 0vw'
            }}>
                <div className='sign_in'>
                    <div className='lock'>
                        <LockOutlinedIcon sx={{fontSize:'30px'}}/>
                        <h1>Sign in</h1>
                    </div>
                    <TextField sx={{}} label='Email Adress*' type='email'></TextField>
                    <TextField label="Password*" variant='outlined' type='password'></TextField>
                    <FormControlLabel required control={<Checkbox />} label='remember password' />
                    <Button href='/Dashboard' variant='contained'>LOGIN</Button>
                    <div className='link'>
                        <Link href='#' underline='always'>{'forgot password'}</Link>
                        <Link href="/sign-up" underline='always'>{'Sign up'}</Link>
                    </div>
                </div>
            </Container>
        </Box>
    );
}

