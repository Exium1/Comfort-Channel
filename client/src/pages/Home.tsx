import { useNavigate } from "react-router-dom"
import { Button } from "~components/Button/Button";
import { Popup } from "~components/Popup/Popup";
import { playNext } from "~scripts/playNext";

import PlayButton from "data-base64:~assets/icons/player-play.svg";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Popup title="Time to unwind?">
            <div className="flex flex-col gap-2">
                <Button text="Play" type="primary" action={playNext} icon={PlayButton}/>
                <div className="flex gap-2">
                    <Button text="Add Show" type="primary" action={() => navigate("/shows/add")} />
                    <Button text="View Shows" type="primary" action={() => navigate("/shows")} />
                </div>
            </div>
        </Popup>
    );
}

export { playNext };