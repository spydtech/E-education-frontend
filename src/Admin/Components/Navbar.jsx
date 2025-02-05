import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Admin Panel
                </Typography>
                {/* Add any additional navbar elements/icons here */}
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
