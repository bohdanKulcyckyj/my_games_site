import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { smallImage } from '../util';

const useStyles = makeStyles((theme) => ({
    card: {
        overflow: "hidden",
        padding: "5rem 2rem 7rem",
        border: "none",
        boxShadow: "none",
    },
    cardContent: {
        padding: 0
    },
    img: {
        width: "100%",
        objectFit: "cover",
    },
    description: {
        margin: "2rem 0",
    }
}))

const GameDetail = () => {
    const classes = useStyles();

    const { game, screenshots, isLoading } = useSelector(state => state.detail);

    return (
        <>{!isLoading && (
                <Container maxWidth="lg">
                    <Card component="article" className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h2" color="primary">{game.name}</Typography>
                        </CardContent>
                        <CardMedia>
                            <img className={classes.img} src={game.background_image} alt={game.name + " image"} />
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.description} variant="body1" color="primary" component="p" dangerouslySetInnerHTML={{__html: game.description}} gutterBottom/>
                            <div>
                                {screenshots.results.map(screen => (
                                    <div key={screen.id}>
                                        <img className={classes.img} src={smallImage(screen.image, 1280)} alt="game screenshot" />
                                    </div>    
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Container>
            )}   
        </>
    )
}

export default GameDetail;