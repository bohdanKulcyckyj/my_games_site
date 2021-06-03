import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { AutorenewTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
    outerContainer: {
        width: "100%",
        minHeight: "100vh",
        overflowY: "scroll",
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "5",
        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ff7676",
        },
        "&::-webkit-scrollbar-track": {
          background: "white",
        },
    },
    innerContainer: {
        top: "5rem",
        bottom: "5rem",
        width: "80%",
        position: "absolute",
        left: "0",
        right: "0",
        margin: "0 auto",
        zIndex: "10",
    },
    card: {
        padding: "5rem 2rem 7rem",
    },
    img: {
        width: "100%",
        objectFit: "cover",
    },
    description: {
        margin: "2rem 0",
    }
})

const GameDetail = () => {
    const { game, screenshots } = useSelector(state => state.detail);

    const classes = useStyles();

    return (
        <div className={classes.outerContainer}> 
            <Container className={classes.innerContainer} maxWidth="lg">
                <Card component="article" className={classes.card}>
                    <CardContent>
                        <Typography variant="h3">{game.name}</Typography>
                    </CardContent>
                    <CardContent className={classes.description}>
                        <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html: game.description}} gutterBottom/>
                    </CardContent>
                    {screenshots.results.map(screen => (
                        <div key={screen.id}>
                            <img className={classes.img} src={screen.image} alt="game screenshot" />
                        </div>    
                    ))}
                </Card>
            </Container>
        </div>
    )
}

export default GameDetail;
