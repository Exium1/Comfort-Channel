import { useNavigate } from "react-router-dom"
import { Button } from "~src/components/Button/Button";
import { Popup } from "~src/components/Popup/Popup";

import PlayButton from "data-base64:~assets/icons/player-play.svg";

export const Home = () => {
    const navigate = useNavigate();

    const closeWindow = () => {
        window.close();
    }

    return (
        <Popup title="Time to unwind?">
            <div className="flex flex-col gap-2">
                <Button text="Play" type="primary" action={closeWindow} icon={PlayButton}/>
                <div className="flex gap-2">
                    <Button text="Add Show" type="primary" action={() => navigate("/shows/add")} />
                    <Button text="View Shows" type="primary" action={() => navigate("/shows")} />
                </div>
            </div>
        </Popup>
    );
}