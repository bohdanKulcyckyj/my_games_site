import React, { useEffect } from 'react';
//REDUX;
import { useDispatch, useSelector } from 'react-redux';
import loadGames from '../actions/gamesAction';
//COMPONENST
import GamesGroup from '../components/GamesGroup';
import Landing from '../components/Landing';
import Header from '../components/Header';
import Footer from '../components/Footer';
//MATERIAL UI
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container : {
    padding: "5rem 1rem",
    transition: "all 2s ease"
  }
});

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(state => state.games);

  const classes = useStyles();

  
  return(
    <>
      <Header />
      <Landing />
      <Container className={classes.container} maxWidth="lg">
        {searched.length > 0 && (
          <GamesGroup data={searched} groupName={"Searching Results"} />
        )}
        <GamesGroup data={upcoming} groupName={"Upcoming"} />
        <GamesGroup data={newGames} groupName={"New"} />
        <GamesGroup data={popular} groupName={"Popular"} />
      </Container>
      <Footer />
    </>
  )
}

export default Home;