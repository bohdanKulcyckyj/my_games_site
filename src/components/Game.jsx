import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

const useStyles = makeStyles({
    card: {
        cursor: "pointer",
        overflow: "hidden",
        height: "20rem",
        textDecoration: "none",
    },
    cardmedia: {
        height: "15rem",
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
        justifyContent: "center"
    }
})

const Game = ({ name, date, id, image }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
        document.body.style.overflow = "hidden";
    }

    const classes = useStyles();

    return (
        <Card component={motion.div} layoutId={stringPathId} className={classes.card} onClick={loadDetailHandler}>
            <Link style={{textDecoration: "none", color: "initial"}} to={`/game/${id}`}>
                <CardMedia className={classes.cardmedia} image={smallImage(image, 640)} title={name} />
                <CardContent className={classes.cardText}>
                    <Typography className={classes.gameName} variant="h6">{name}</Typography>
                    <Typography className={classes.gameDate} variant="subtitle1">{date}</Typography>
                </CardContent>
            </Link>
        </Card>
    )
}

export default Game;
