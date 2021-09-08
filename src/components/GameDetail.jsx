import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { AutorenewTwoTone } from '@material-ui/icons';
import { smallImage } from '../util';
import { useDispatch } from 'react-redux';
import { clearDetail } from '../actions/detailAction';

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
        overflow: "hidden",
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

const GameDetail = ({ pathId }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const exitDetailHandler = (e) => {
        const element = e.target;
        console.log(element);
        if(element.classList.contains(classes.outerContainer)) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
        dispatch(clearDetail());
    }

    const { game, screenshots, isLoading } = useSelector(state => state.detail);

    const classes = useStyles();

    return (
        <>{!isLoading && (
            <motion.div onClick={exitDetailHandler} className={classes.outerContainer}> 
                <Container component={motion.div} className={classes.innerContainer} maxWidth="lg">
                    <motion.div layoutId={pathId}>
                        <Card component={motion.article} className={classes.card}>
                            <CardContent component={motion.div}>
                                <Typography variant="h3">{game.name}</Typography>
                            </CardContent>
                            <motion.div>
                                <motion.img src={game.background_image} alt={game.name + " image"} className={classes.img} />
                            </motion.div>
                            <CardContent component={motion.div} className={classes.description}>
                                <Typography variant="body1" component="p" dangerouslySetInnerHTML={{__html: game.description}} gutterBottom/>
                            </CardContent>
                            <motion.div>
                                {screenshots.results.map(screen => (
                                    <div key={screen.id}>
                                        <img className={classes.img} src={smallImage(screen.image, 1280)} alt="game screenshot" />
                                    </div>    
                                ))}
                            </motion.div>
                        </Card>
                    </motion.div>
                </Container>
            </motion.div>)}   
        </>
    )
}

export default GameDetail;
