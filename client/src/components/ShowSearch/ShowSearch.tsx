import "axios"

import { useState } from "react";
import { searchShows } from "~scripts/api";

import { ShowInput } from '../ShowInput/ShowInput';
import { ShowCard } from '../ShowCard/ShowCard';
import "./ShowSearch.css"

export const ShowSearch = () => {

    const [ showList, setShowList ] = useState([])

    const handleQuery = async (query: string, platform: string) => {

        const response = await searchShows(query, platform);
        
        if (!response) return;

        setShowList(response.shows);
    }

    return (
        <div className='flex flex-col gap-3'>
            <ShowInput handleQuery={handleQuery}/>
            {showList.map((show) => <ShowCard key={show.showID} show={show} viewEpsButton={true}/>)}
        </div>
    )
}