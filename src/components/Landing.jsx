import React, { useState } from 'react';
import backgroundImage from '../assets/landing-background.png';
import fetchSearch from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { makeStyles, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    searchForm: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
        [theme.breakpoints.up('md')]: {
            width: "50%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "30vw",
        },
    },
    inputStyle : {
        width: "100%",
        height: "4rem",
        background: "#b5c0e6",
        color: "#111933",
        border: "none",
        outline: "none",
        fontSize: "2rem",
        padding: "0.5rem",
        borderRadius: "5px",
    },
    landingBackground : {
        width: "100%",
        height: "60vh",
        margin: "80px 0 0",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    iconButton: {
        width: "4rem",
        height: "4rem",
        position: "absolute",
        right: "0",
        top: "0"
    },
    searchIcon: {
        color: theme.palette.primary.main,
        fontSize: "2rem",
    }
}))


const Landing = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const classes = useStyles();
  
    const inputHandler = (e) => {
      setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
      e.preventDefault();
      console.log(textInput);
      dispatch(fetchSearch(textInput));
      setTextInput("");
    };
    const clearSearched = () => {
      dispatch({ type: "CLEAR_SEARCHED" });
    };

    return (
        <div className={classes.landingBackground}>
            <form className={classes.searchForm}>
                <input className={classes.inputStyle} value={textInput} onChange={inputHandler} type="text" name="find_game" id="find_game" placeholder="Search..." />
                <IconButton component="button" className={classes.iconButton} onClick={submitSearch} type="submit">
                    <SearchIcon className={classes.searchIcon} />
                </IconButton>
            </form>
        </div>
    )
}

export default Landing
