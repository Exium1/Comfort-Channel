import { useNavigate } from "react-router-dom"
import "./popup.css"

export const Popup = ({title, children} : {title: string, children: any}) => {
    const navigate = useNavigate();

    return (
        <div className="popup-wrapper">
            <h1>{title}</h1>
            <div className="flex flex-col">
                {children}
            </div>
        </div>
    );
}