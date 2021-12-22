import { useState } from "react";

const Item = ({ title, volume, content, image }) => {
    const [isActive, setIsActive] = useState(false);
  
      return (
          <div className="accordion-item">
              <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                  <div>{title}</div>
                  <div>{isActive ? '-' : '+' }</div>
              </div>
              {isActive && 
              <div className="accordion-content">
                  <h3>Alcohol volume: {volume}</h3>
                 {content}
                 <hr />
                 <img src={image} alt={title} />
              </div>}
          </div>
      );
  }
  
  export default Item;