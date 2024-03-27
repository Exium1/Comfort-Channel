import "./ShowEpisodes.css";
import { useState } from "react";

import SeasonMenu from "data-base64:~assets/icons/season-menu.svg";
import BoxChecked from "data-base64:~assets/icons/box-checked.svg";
import BoxUnchecked from "data-base64:~assets/icons/box-unchecked.svg";

export const ShowEpisodes = ({episodes} : {episodes: any}) => {

    const [season, setSeason] = useState(1);

    return (
        <div className="show-list-wrapper">
            <div className="flex justify-between">
                <button className="show-list-season-selector"><img src={SeasonMenu} alt="season menu" height={30} width={30}/>Season {season}</button>
                <button className="show-list-season-add"><img src={BoxChecked} alt="box checked" height={25} width={25}/></button>
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