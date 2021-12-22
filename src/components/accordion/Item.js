import React from "react";

export const Item = ({ title, volume, content, image }) => {
    const [isActive, setIsActive] = React.useState(false);
  
    return (
          <div className="accordion-item">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                  <div>{title} ({volume}%)</div>
                  <div>{isActive ? '-' : '+' }</div>
              </div>
              {isActive && 
              <div className="accordion-content">
                  <h3>Alcohol volume: {volume}</h3>
                 {content}
                 <hr />
                {image && 
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
                }
              </div>}
          </div>
    );
}