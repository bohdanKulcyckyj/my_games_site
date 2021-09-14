import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { smallImage } from '../util';
//PLATFORM IMAGES
import apple from '../assets/platforms/apple.svg';
import gamepad from '../assets/platforms/gamepad.svg';
import nintendo from '../assets/platforms/nintendo.svg';
import playstation from '../assets/platforms/playstation.svg';
import steam from '../assets/platforms/steam.svg';
import xbox from '../assets/platforms/xbox.svg';
//START IMAGES
import fullStar from '../assets/full-star.svg';
import emptyStar from '../assets/empty-star.svg';
import halfFullStar from '../assets/half-full-star.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto"
    },
    card: {
        overflow: "hidden",
        height: "auto",
        padding: "5rem 2rem 7rem",
        border: "none",
        boxShadow: "none",
    },
    cardContent: {
        padding: 0,
        textAlign: "center",
    },
    img: {
        width: "100%",
        objectFit: "cover",
    },
    description: {
        margin: "2rem 0",
    },
    contentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "0 0 2rem"
    },
    platforms: {
        display: "flex",
        flexDirection: "row",
        "& img": {
            margin: "10px",
            color: theme.palette.primary.main
        }
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        "& img": {
            margin: "4px",
            width: "40px",
            height: "auto"
        }
    },
    link: {
        textDecoration: "none",
        margin: '2rem 0',
        color: theme.palette.primary.main,
        textTransform: "capitalize",
    }
}))

const GameDetail = () => {
    const classes = useStyles();

    const { game, screenshots, isLoading } = useSelector(state => state.detail);

    const getPlatform = (platform) => {
        if(platform.match(/Playstation/ig)) {
            return playstation;
        } else if(platform.match(/Xbox/ig)) {
            return xbox;
        } else if(platform.match(/PC/ig)) {
            return steam;
        } else if(platform.match(/Nintendo/ig)) {
            return nintendo;
        } else if(platform.match(/iOS/ig)) {
            return apple;
        } else {
            return gamepad;
        }

        /*switch(platform) {
            case "Playstation 5":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }*/
    }

    const getStars = () => {
        const stars = [];
        const rating = game.rating;

        for(let i = 1; i <= 5; i++) {
            if(rating < i && rating > (i - 1)) {
                stars.push(<img key={i} src={halfFullStar} alt="empty star" />)
            } else if(rating >= i) {
                stars.push(<img key={i} src={fullStar} alt="empty star" />)
            } else {
                stars.push(<img key={i} src={emptyStar} alt="empty star" />)
            }
        }
        return stars;
    }

    return (
        <>{!isLoading && (
                <Container className={classes.root} maxWidth="lg">
                    <Card component="article" className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h1" color="primary">{game.name}</Typography>
                            {/*<Typography variant="body1" color="primary">{game.released}</Typography>*/}
                            <Container className={classes.contentContainer}>
                                <div className={classes.rating} title={`rating: ${game.rating}`}>
                                    {getStars()}
                                </div>
                                <div className={classes.platforms}>
                                    {game.platforms.map((_data) => (<img key={_data.platform.id}
                                    src={getPlatform(_data.platform.name)} alt={_data.platform.name} title={_data.platform.name} />))}
                                </div>
                            </Container>
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
                            {game.website && (
                                <Typography variant="button" gutterBottom component="a" className={classes.link} href={game.website} target="_blank" rel="noreferrer">
                                    Learn more
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Container>
            )}   
        </>
    )
}

export default GameDetail;