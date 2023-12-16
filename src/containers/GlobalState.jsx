import React, { useState } from "react";
import MainContext from "./MainContext";
import config from "../config";
const GlobalState = (props) => {
    const [projects, setProjects] = useState([
        {
            id: 419,
            title: "ساختمان مهرزاد",
            thumbnail: "img_mehrzad_0.jpg",
            source: `${config.sources.projects}/419`,
            images: ["img_mehrzad_0.jpg", "img_mehrzad_1.jpg", "img_mehrzad_2.jpg"],
            videos: [],
            address: "گیلان، تالش، خیابان تیلار",
            floors: 4,
            meterage: "هر طبقه 230",
            details: "توضیحات جانبی پروژه"
        },
    ]);

    return (
        <MainContext.Provider
            value={{
                projects,
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};

export default GlobalState;
