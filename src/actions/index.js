import axios from "axios";

const API_KEY = `8053306bef68297147a70aa161a4b52f`;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = `FETCH_WEATHER`;

export function fetchWeather(city) {
    const ROOT_URL = `${ROOT_URL}&q={city},us`;
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request,
    }
}