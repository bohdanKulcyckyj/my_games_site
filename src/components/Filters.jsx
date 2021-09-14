import React, { useEffect } from 'react';
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      borderRadius: "5px",
      margin: "0 0 2rem",
      background: theme.palette.secondary.dark,
    },
  }));

const Filters = ({ setActiveFilter }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        setActiveFilter(value);
    }, [value]);
  
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Upcoming" />
          <Tab label="New" />
          <Tab label="Popular" />
        </Tabs>
      </Paper>
    );
}

export default Filters;
