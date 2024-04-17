import "./ShowCard.css";

// import ShowAdd from "data-base64:~assets/icons/show-add.svg";
// import ShowAdded from "data-base64:~assets/icons/show-added.svg";
import BoxChecked from "data-base64:~assets/icons/box-checked-light.svg";
import BoxUnchecked from "data-base64:~assets/icons/box-unchecked-light.svg";
import BoxPartial from "data-base64:~assets/icons/box-partial-light.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShowCard = ({ show, viewEpsButton }: { show: any, viewEpsButton?: boolean }) => {
    const navigate = useNavigate();
    const [added, setAdded] = useState(show.added); // 0: none, 1: some, 2: all

    const handleAdd = () => {
        setAdded(added == 0 ? 2 : (added + 1) % 3);
    }

    return (
        <div className="show-card">
            <img
                className="show-card-image"
                src={show.image}
                alt={show.title}
            />
            <div className="show-card-details">
                <h2 className="show-card-title">{show.title}</h2>
                <p className="show-card-episodes">{show.seasonCount} seasons, {show.episodeCount} episodes</p>
                {viewEpsButton && <button className="show-card-view-episodes" onClick={() => navigate(`/shows/${show.showID}`)}>View Episodes</button>}
            </div>
            <button className="show-card-button" onClick={handleAdd}>
                {added == 0 ? <img src={BoxUnchecked} height={20} width={20} alt="Add"/>
                 : added == 1 ? <img src={BoxPartial} height={20} width={20} alt="Add"/>
                 : <img src={BoxChecked} height={20} width={20} alt="Unadd"/>}
            </button>
        </div>
    )
}