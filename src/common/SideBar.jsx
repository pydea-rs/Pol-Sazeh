import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideBar.css";

export default (props) => (
    <Menu right {...props}>
        <a className="menu-item" href="/">
            صفحه اصلی
        </a>
        <a className="menu-item" href="/projects">
            پروژه ها
        </a>
        <a className="menu-item" href="/contact">
            تماس با ما
        </a>
        <a className="menu-item" href="/about">
            درباره ما
        </a>
    </Menu>
);
