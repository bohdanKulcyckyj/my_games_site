import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../rawg_api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsURL(id));
    const screenshotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screenshots: screenshotsData.data,
        }
    })
}