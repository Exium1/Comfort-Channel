import axios from "axios";

import { getUserID } from "./auth";

const searchShows = async (query: string, platform: string) => {

    const options = {
        method: 'GET',
        url: 'http://localhost:3000/search/show',
        params: { 
            query: query,
            platform: platform,
        },
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await getUserID()}`
        }
    }

    const response = await axios.request(options);

    if (!response) return [];
    return response.data;
};

const getNextEpisode = async () => {

    const userID = await getUserID();
    const response = await fetch('http://localhost:3000/channel/next', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userID}`
        }
    });


    const data = await response.json();

    if (!response) return "";
    return data.url;
}

export { searchShows, getNextEpisode };