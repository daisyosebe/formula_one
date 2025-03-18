import React from "react";
import "./contentGrid.css"

export default function ContentGrid ({items}) {
    return (
        <div className ="grid-container">
            {items.map((item, index)=>(

                <div className="grid-item" key={index}>
                        <div className="flip-card-inner">
                            
                            {/*  front side image and name */}
                           <div className="flip-card-front">   
                    <img src={item.image} alt={item.title} className="grid-image"/> 
                    <h3 className="grid-title">
                        {item.title}
                    </h3>
                    </div>

                    {/* back side */}
                    <div className="flip-card-back">
                        <p>{item.description}</p>
                    </div>

                </div>
            </div>
        ))}
    </div>
);
}
