import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import Logo from '../assets/logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    myAppBar: {
        height: "80px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
        padding: "10px 0"
    },
    logo: {
      flexGrow: 1,
      fontFamily: ['Franklin Gothic Medium', 'Arial Narrow', "Arial", "sans-serif"].join(","),
      color: "#f0f0f0",
      height: "50px"
    },
  }));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.myAppBar}>
          <img src={Logo} alt="logo" className={classes.logo} />
            {/*<Toolbar>
              <Button color="textColor">Login</Button>
            </Toolbar>*/}
        </AppBar>
    )
}

export default Header
