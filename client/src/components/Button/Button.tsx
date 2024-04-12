import { useNavigate } from "react-router-dom";
import "./Button.css";

export const Button = ({text, icon, type, link, action} : {text: string, icon?: string, type: string, link?: string, action?: any}) => {

    const navigate = useNavigate();

	return (
        <>
            {link ? (<button className={`button ${type}`} onClick={() => navigate(link)}>
                    {icon && <img src={icon} alt="" width={20} height={20} />}
                    {text}
                </button>)
                : (<button className={`button ${type}`} onClick={action}>
                    {icon && <img src={icon} alt="" width={20} height={20} />}
                    {text}
                </button>)
            }
        </>
	);
}