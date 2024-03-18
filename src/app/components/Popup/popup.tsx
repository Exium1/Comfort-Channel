'use client'

import "./popup.css";
import Image from "next/image";

export default function Popup() {
    const close = () => window.close();
    
    return (
      <div className="popup-wrapper">
        <h1>Time to unwind?</h1>
        <div className="popup-buttons">
            <button onClick={close} className="popup-button"><Image src="/assets/icons/player-play.svg" alt="" width={20} height={20}/>Play</button>
            <div>
                <a href="#" className="popup-button">Add Show</a>
                <a href="#" className="popup-button">Edit Shows</a>
            </div>
        </div>
      </div>
    );
  }
  