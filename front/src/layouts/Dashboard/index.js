import *as React from 'react';
import Box from '@mui/material/Box'
import NavBar from './NavBar';
import Schema from './Body/body'

export default function Dashboard() {
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:'1vw'
        }}>
            <NavBar/>
            <Schema/>
        </Box>
    );
}