import React from "react";
import "./contentGrid.css"

export default function contentGrid ({items}) {
    return (
        <div className ="grid-container">
            {items.map((item, index)=>(
                <div className="grid-item" key={index}>
                    <img src={item.image} alt={item.title} className="grid-image"/> 
                    <h3>
                        {item.title}
                    </h3>
                    <p>{item.description}</p>
                    </div>
                ))}
        </div>
    )
}