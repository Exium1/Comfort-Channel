import "./ShowCard.css";

import ShowAdd from "data-base64:~assets/icons/show-add.svg";
import ShowAdded from "data-base64:~assets/icons/show-added.svg";
import { useNavigate } from "react-router-dom";

export const ShowCard = ({ show }: { show: any }) => {
    const navigate = useNavigate();

    return (
        <div className="show-card">
            <img
                className="show-card-image"
                src={show.image}
                alt={show.name}
            />
            <div className="show-card-details">
                <h2 className="show-card-title">{show.name}</h2>
                <p className="show-card-episodes">{show.seasonCount} seasons, {show.episodeCount} episodes</p>
                <button className="show-card-view-episodes" onClick={() => navigate(`/shows/${show.id}`)}>View Episodes</button>
            </div>
            <button className="show-card-button">
                {show.added ? <img src={ShowAdded} height={20} width={20} alt="Added"/> : <img src={ShowAdd} height={20} width={20} alt="Add"/>}
            </button>
        </div>
    )
}