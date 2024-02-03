import *as React from 'react';
import './index.css';
import '../sign-in/index.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { Checkbox } from '@mui/material';

export default function Sign_up() {
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
                width:'65%',
                padding:'2vh 0vw'
            }}>
                <div className='sign_in'>
                <div className='lock'>
                        <LockOutlinedIcon sx={{fontSize:'30px'}}/>
                        <h1>Sign up</h1>
                    </div>
                    <TextField label="Name" type='name'></TextField>
                    <TextField sx={{}} label='Email Adress*'></TextField>
                    <TextField label="Password*" variant='outlined' type='password'></TextField>
                    <div>
                        <FormControlLabel required control={<Checkbox />} label='Agree' />
                        <Link href='#' underline='none'>{'the Terms and Conditions'}</Link>
                    </div>
                    <Button variant='contained'>SIGN IN</Button>
                    <p className='sign_in_p'>Already have a compte<Link href='/' underline='none'>{'Sign in'}</Link></p>
                </div>
            </Container>
        </Box>
    );
}