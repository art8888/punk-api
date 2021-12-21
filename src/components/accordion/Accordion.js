import { useState } from "react";

const Accordion = ({ title, content }) => {

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                
            </div>
        </div>
    );
}

export default Accordion;