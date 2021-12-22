import React from "react";

import Item from "./Item";

const Accordion = ({ list }) => {

    return (
        <div className="accordion">
            {list.map(({ id, name, abv, description, image_url}) => (
                <Item key={id} title={name} volume={abv} content={description} image={image_url}/>
            ))}
        </div>
    );
}

export default Accordion;