import React, { useState, useEffect } from 'react';
//REDUX;
import { useDispatch, useSelector } from 'react-redux';
import loadGames from '../actions/gamesAction';
//COMPONENST
import GamesGroup from '../components/GamesGroup';
import Landing from '../components/Landing';
import Header from '../components/Header';
import Filters from '../components/Filters';
import Footer from '../components/Footer';
//MATERIAL UI
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container : {
    padding: "5rem 1rem",
    transition: "all 2s ease"
  }
});

const Home = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(state => state.games);

  const classes = useStyles();

  const switchFilter = () => {
    switch(activeFilter) {
      case 0:
        return <GamesGroup data={upcoming} />
      case 1:
        return <GamesGroup data={newGames} />
      case 2:
        return <GamesGroup data={popular} />
      default:
        return <GamesGroup data={upcoming} />
    }
  }

  return(
    <>
      <Header />
      <Landing />
      <Container className={classes.container} maxWidth="lg">
        {searched.length > 0 && (
          <>
            <Typography variant="h1" gutterBottom>Searching results:</Typography>
            <GamesGroup data={searched} />
          </>
        )}
        <Filters setActiveFilter={setActiveFilter} />
        {switchFilter()}
      </Container>
      <Footer />
    </>
  )
}

export default Home;