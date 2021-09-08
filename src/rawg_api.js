const rawgKey = process.env.REACT_APP_RAWG_API_KEY;
const baseURL = 'https://api.rawg.io/api/';
const addApiKey = `?key=${rawgKey}`;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10) return `0${month}`;
    return month;
}
const getCurrentDay = () => {
    const day = new Date().getDay();
    if(day < 10) return `0${day}`;
    return day;
}
const getCurrentYear = new Date().getFullYear();

const currentDay = getCurrentDay();
const currentMonth = getCurrentMonth();
const currentYear = getCurrentYear;
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const previousFullYear = `${currentYear - 1}-01-01`;
const nextFullYear = `${currentYear + 1}-12-31`;
//const customFullYear = (year) => `${year}-01-01`;

export const popularGamesURL = () => `${baseURL}games${addApiKey}&dates=${previousFullYear},${currentDate}&ordering=-rating&page_size=12`;
export const upcomingGamesURL = () => `${baseURL}games${addApiKey}&dates=${currentDate},${nextFullYear}&ordering=-added&page_size=12`;
export const newGamesURL = () => `${baseURL}games${addApiKey}&dates=${previousFullYear},${currentDate}&ordering=-released&page_size=12`;

//GAME DETAILS
export const gameDetailsURL = (gameId) => `${baseURL}games/${gameId}${addApiKey}`;

//GAME SCREENSHOTS
export const gameScreenshotsURL = (gameId) => `${baseURL}games/${gameId}/screenshots${addApiKey}`;

//SEARCHED GAMES
export const searchGameURL = (game_name) => `${baseURL}games${addApiKey}&search=${game_name}&page_size=9`;

