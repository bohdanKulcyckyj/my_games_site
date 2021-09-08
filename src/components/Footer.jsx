import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.textColor,
        width: "100%",
        height: "14vh",
        display: "flex",
        justifyContent: "center",
        padding: "4rem 0 0",
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footerContainer}>
            <Typography variant="body1" color="secondary">made by Bohdan K.</Typography>
        </div>
    )
}

export default Footer
