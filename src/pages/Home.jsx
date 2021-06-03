import React, { useEffect } from 'react';
//REDUX;
import { useDispatch, useSelector } from 'react-redux';
import loadGames from '../actions/gamesAction';
//COMPONENST
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//FRAMER MOTION
import { motion } from 'framer-motion';
//MATERIAL UI
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { gameScreenshotsURL } from '../rawg_api';

const useStyles = makeStyles({
  container : {
    padding: "5rem 0"
  }
});

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector(state => state.games);
  const { game, screenshots } = useSelector(state => state.detail);

  const classes = useStyles();

  
  return(
    <Container className={classes.container} maxWidth="lg">
      <Grid spacing={4} container>
        {upcoming.map(game => (
          <Grid key={game.id} xs={12} sm={6} md={4} item>
            <Game name={game.name} id={game.id} image={game.background_image} />
          </Grid>
        ))}
        {popular.map(game => (
          <Grid key={game.id} xs={12} sm={6} md={4} item>
            <Game name={game.name} id={game.id} image={game.background_image} />
          </Grid>
        ))}
        {newGames.map(game => (
          <Grid key={game.id} xs={12} sm={6} md={4} item>
            <Game name={game.name} id={game.id} image={game.background_image} />
          </Grid>
        ))}
      </Grid>
      {screenshots.hasOwnProperty("results") && (<GameDetail />)}
    </Container>
  )
}

export default Home;