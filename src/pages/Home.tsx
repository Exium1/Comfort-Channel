import { useNavigate } from "react-router-dom"
import { Popup } from "~src/components/Popup/popup";

export const Home = () => {
    const navigate = useNavigate();

    return (
        <Popup title="Time to unwind?">
            <button onClick={() => navigate("/addshow")}>Add Show</button>
        </Popup>
    );
}