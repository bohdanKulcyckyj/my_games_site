import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//REDUX;
import { useDispatch, useSelector } from 'react-redux';
import loadGames from '../actions/gamesAction';
//COMPONENST
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//FRAMER MOTION
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
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
  const location = useLocation();
  const path = location.pathname.split('/');
  const pathId = path[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector(state => state.games);
  const { game, screenshots } = useSelector(state => state.detail);

  const classes = useStyles();

  
  return(
    <Container component={motion.div} className={classes.container} maxWidth="lg">
      <AnimateSharedLayout type="crossfade">
        <Grid component={motion.div} spacing={4} container>
          {upcoming.map(game => (
            <Grid key={game.id} xs={12} sm={6} md={4} item>
              <Game name={game.name} date={game.released} id={game.id} image={game.background_image} />
            </Grid>
          ))}
          {popular.map(game => (
            <Grid key={game.id} xs={12} sm={6} md={4} item>
              <Game name={game.name} date={game.released} id={game.id} image={game.background_image} />
            </Grid>
          ))}
          {newGames.map(game => (
            <Grid key={game.id} xs={12} sm={6} md={4} item>
              <Game name={game.name} date={game.released} id={game.id} image={game.background_image} />
            </Grid>
          ))}
        </Grid>
        <AnimatePresence>{pathId && (<GameDetail pathId={pathId} />)}</AnimatePresence>
      </AnimateSharedLayout>
    </Container>
  )
}

export default Home;