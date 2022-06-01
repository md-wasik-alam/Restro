import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Header() {
    return (
        <AppBar position='static' >
            <Toolbar >
                <Box sx={{ flex: 1.5 }}>
                    <Button color='inherit'>keyboard</Button>
                    <Button color='inherit'>Order Item</Button>
                    <Button color='inherit'>Take Away</Button>
                    <Button color='inherit'>Delivery</Button>
                </Box>
                <Typography sx={{ flex: 0.5 }}>Restro ERP</Typography>
                <Box sx={{ flex: 1.5 }}>
                    <Button color='inherit'>Sales Return</Button>
                    <Button color='inherit'>New</Button>
                    <Button color='inherit'>K.O.T</Button>
                    <Button color='inherit'>Hold</Button>
                    <Button color='inherit'>Unhold</Button>
                    <Button color='inherit'>Setting</Button>
                    <Button color='inherit'>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
