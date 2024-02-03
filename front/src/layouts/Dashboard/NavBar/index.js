import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './index.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';

export default function ButtonAppBar() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <AppBar sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            top: '1vh',
            right: '0vw',
            left: '0.5vw',
            width: '20%',
            height: '98%',
            backgroundColor: 'rgba(0, 0, 0, 0.87)',
            borderRadius: '10px'
        }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5vw'
            }}>
                <DashboardCustomizeOutlinedIcon />
                <h1 style={{ fontSize: '15px', fontWeight: '300' }}>DASHBOARD</h1>
            </Toolbar>
            <hr id='hr' />
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{'& ToggleButton':{width:'50%'},display:'flex',flexDirection:'column',gap:'1vh'}}
            >
                <ToggleButton sx={{color:"white"}} value="Dashboard">Dashboard</ToggleButton>
                <ToggleButton sx={{color:'white'}} value="Table List">Table List</ToggleButton>
                <ToggleButton sx={{color:'white'}} value="Notification">Notifications</ToggleButton>
            </ToggleButtonGroup>
        </AppBar>
    );
}