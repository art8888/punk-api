import React from "react";

import { Item } from "./Item";

const Accordion = ({ list }) => {

    return (
        <div className="row">
            {list.map(({ id, name, abv, description, image_url}) => (
                <div className="column">
                    <Item key={id} title={name} volume={abv} content={description} image={image_url}/>
                </div>
            ))}
        </div>
    );
}

export default Accordion;