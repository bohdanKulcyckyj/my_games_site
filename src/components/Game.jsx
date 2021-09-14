import React from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { smallImage } from '../util';

const useStyles = makeStyles((theme) => ({
    card: {
        cursor: "pointer",
        overflow: "hidden",
        height: "22rem",
        padding: "0",
        textDecoration: "none",
        transition: "all 1s ease",
        backgroundColor: theme.palette.primary.main,
    },
    cardmedia: {
        height: "16rem",
    },
    cardImage: {
        width: "100%",
        objectFit: "cover",
    },
    gameName: {
        cursor: "pointer",
    },
    cardText: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.textColor.main
    },
    releasedDate: {
        color: theme.palette.secondary.light
    }
}))

const Game = ({ name, date, id, image, popoverIdentifier, handleClick }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card} aria-describedby={popoverIdentifier} onClick={handleClick}>
            <CardActionArea style={{textDecoration: "none", color: "initial"}} to={`/game/${id}`}>
                <CardMedia className={classes.cardmedia} image={smallImage(image, 640)} title={name} />
                <CardContent className={classes.cardText}>
                    <Typography className={classes.gameName} variant="h6">{name}</Typography>
                    <Typography className={classes.releasedDate} variant="body1">{date}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Game;