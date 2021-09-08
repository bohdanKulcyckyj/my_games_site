import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import CardPopover from '../components/CardPopover';

const useStyles = makeStyles((theme) => ({
    groupSection:{
        margin: "0 0 2rem",
        padding: "0 0 4rem",
        borderBottom: `1px solid ${theme.palette.primary.main}`
    }
}))

const GamesGroup = ({ data, groupName }) => {
    const classes = useStyles();

    return (
        <section className={classes.groupSection}>
            <Typography variant="h2" color="primary" style={{textTransform: "uppercase"}} gutterBottom>{groupName}</Typography>
            <Grid spacing={4} container>
                {data.map((_data) => (
                    <Grid key={_data.id} xs={12} sm={6} md={4} item>
                      <CardPopover name={_data.name} date={_data.released} id={_data.id} image={_data.background_image} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}

export default GamesGroup
