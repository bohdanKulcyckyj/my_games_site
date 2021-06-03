import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { motion } from 'framer-motion';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';

const useStyles = makeStyles({
    card: {
        cursor: "pointer",
        overflow: "hidden",
        height: "20rem",
    },
    cardmedia: {
        height: "15rem",
    },
    gameName: {
        cursor: "pointer",
    }
})

const Game = ({ name, id, image }) => {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    }

    const classes = useStyles();

    return (
        <Card className={classes.card} onClick={loadDetailHandler}>
            <CardMedia className={classes.cardmedia} image={image} title={name} />
            <CardContent>
                <Typography className={classes.gameName} variant="h6">{name}</Typography>
            </CardContent>
        </Card>
    )
}

export default Game;
