'use client'

import "./popup.css";

export default function Popup({children, title}: {children: any, title: string}) {
   
    return (
      <div className="popup-wrapper">
        <h1>{title}</h1>
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    );
  }
  