import axios from 'axios';
import { searchGameURL } from '../rawg_api';

const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));
  
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchGames.data.results,
      },
    });
  };

export default fetchSearch;