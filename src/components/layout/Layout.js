import React from "react";

import Button from "../button/Button";
import Accordion from "../accordion/Accordion";

const Layout = ({ data }) => {
    const [list, setList] = React.useState([]);
    const [title, setTitle] = React.useState("ASC");

    React.useEffect(() => {
        if(data) {
            setList(data);
        }
    }, [list, data]);

    function handleOnClick() {
        sortBy(title)
    }

    function sortBy(ordering) {
        
        let arrayList = list;

        if(ordering === "ASC") {
            arrayList = arrayList.sort((a, b) => {
                return a.abv - b.abv;
            });
            setTitle("DESC");
        }

        if(ordering === "DESC") {
            arrayList = arrayList.sort((a, b) => {
                return b.abv - a.abv;
            });
            setTitle("ASC");
        }

        setList(arrayList);
    }
    
    return ([
        <Button title={`Order by ${title}`} onClick={handleOnClick}  />,
        <Accordion list={list} />    
    ]);
}

export default Layout;