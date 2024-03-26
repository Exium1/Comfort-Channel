import { useNavigate } from "react-router-dom"
import { Popup } from "~src/components/Popup/Popup";
import { ShowSearch } from "~src/components/ShowSearch/ShowSearch";

export const AddShow = () => {
    const navigate = useNavigate()

    return (
        <Popup title="Add a show" back={true}>
            <ShowSearch />
        </Popup>
    );
}