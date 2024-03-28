import "./ShowEpisodes.css";
import { useState } from "react";

import SeasonMenu from "data-base64:~assets/icons/season-menu.svg";
import BoxChecked from "data-base64:~assets/icons/box-checked-black.svg";
import BoxUnchecked from "data-base64:~assets/icons/box-unchecked-black.svg";

export const ShowEpisodes = ({episodes} : {episodes: any}) => {

    const [season, setSeason] = useState(1);
    const seasons = 5;

    const [showSeasons, setShowSeasons] = useState(false);
    
    return (
        <div className="show-list-wrapper">
            <div className="flex justify-between">
                <button className="show-list-season-selector" onClick={() => setShowSeasons(!showSeasons)}><img src={SeasonMenu} alt="season menu" height={30} width={30}/>Season {season}</button>
                <button className="show-list-season-add"><img src={BoxChecked} alt="box checked" height={25} width={25}/></button>
            </div>
            <div className={"show-list-seasons " + (showSeasons ? "show" : "")}>
                {Array.from({length: seasons}, (_, i) => i+1).map((seasonNum: number) => (
                    <div className="flex justify-between">
                        <button className="show-list-seasons-item" onClick={() => setSeason(seasonNum)}>Season {seasonNum}</button>
                        <button className="show-list-seasons-item-add"><img src={BoxChecked} alt="box checked" height={15} width={15}/></button>
                    </div>
                ))}
            </div>
            <div className="show-list-episodes">
                {episodes.map((episode: any, index: number) => {
                    if (episode.season == season) return (
                        <button className="show-list-episode-item">
                            <span>{index+1}. {episode.name}</span>
                            {episode.added ? 
                                <img src={BoxChecked} alt="box checked" height={20} width={20}/>
                                : <img src={BoxUnchecked} alt="box unchecked" height={20} width={20}/>
                            }
                        </button>
                    )
                })}
            </div>
        </div>
    )
}