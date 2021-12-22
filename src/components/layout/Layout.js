import React from "react";

import Button from "../button/Button";
import Accordion from "../accordion/Accordion";

const Layout = ({ list }) => {

    function handleOnClick() {
        alert("I am working")
    }

    return (
        <div className="wrapper">
            <Button title={"sort"} onClick={handleOnClick}  />
            <Accordion list={list} />
        </div>
    );
}

export default Layout;