import { useNavigate } from "react-router-dom";
import "./Popup.css"

import BackButton from "data-base64:~assets/icons/back.svg";

export const Popup = ({title, children, back, className} : {title: string, children?: any, back?: boolean, className?: string}) => {

    const navigate = useNavigate();

    return (
        <div className={`popup-wrapper ${className}`}>
            <div className="popup-title">
                <h1>{title}</h1>
                {back && <button className="back-button" onClick={() => navigate(-1)}><img src={BackButton} alt="back" height={30} width={30}/></button>}
            </div>
            <div className="popup-content">
                {children}
            </div>
        </div>
    );
}