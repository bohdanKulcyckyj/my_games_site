import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Popover, makeStyles } from '@material-ui/core';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { clearDetail } from '../actions/detailAction';
//COMPONENTS
import GameDetail from './GameDetail';
import Game from './Game';

const useStyles = makeStyles (theme => ({
    popoverRoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      //height: "auto",
    },
  }));

const CardPopover = ({ name, date, id, image }) => {
    const location = useLocation();
    const path = location.pathname.split('/');
    const pathId = path[2];
    const dispatch = useDispatch();

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { isLoading } = useSelector(state => state.detail);
    const open = Boolean(anchorEl);
    const popoverIdentifier = open ? `card-${id}` : undefined;

    useEffect(() => {
        if(anchorEl) {
            dispatch(loadDetail(id));
        } else {
            dispatch(clearDetail());
        }
    }, [anchorEl])

    return (
        <div>
            <Game name={name} date={date} image={image} popoverIdentifier={popoverIdentifier}
                id={id} handleClick={handleClick} />
            <Popover id={popoverIdentifier} open={open} anchorEl={anchorEl}
                onClose={handleClose} classes={{ root: classes.popoverRoot }}
                anchorReference={"none"} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center',}} style={{visibility: `${isLoading ? "hidden" : "visible"}`}}>
                <GameDetail pathId={pathId} />
            </Popover>
        </div>
    )
}

export default CardPopover
