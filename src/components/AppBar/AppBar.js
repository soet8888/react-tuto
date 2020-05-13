import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const Topbar = props => {
    return (
        <AppBar
            className='Appbar'
            style={{ backgroundColor: "bluegray" }}
        >
            <Toolbar>
                <img
                    alt="Logo"
                    src="logo192.png"
                    height="40px"
                />
                <h2 style={{ textAlign: 'center' }}>React Tutorial</h2>

            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
