import "./button.css";
import Image from "next/image";

export default function Button({text, icon, type, link, action} : {text: string, icon?: string, type: string, link?: string, action?: any}) {
	return (
        <>
            {link ? (<a className={`button ${type}`}>
                    {icon && <Image src={icon} alt="" width={20} height={20} />}
                    {text}
                </a>)
                : (<button className={`button ${type}`} onClick={action}>
                    {icon && <Image src={icon} alt="" width={20} height={20} />}
                    {text}
                </button>)
            }
        </>
	);
}
