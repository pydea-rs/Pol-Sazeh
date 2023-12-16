import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="m-3">
            <ul className="nav nav-border nav-pills justify-content-center">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link"
                        exact
                        activeClassName="pulsing-item"
                        activeStyle={{ color: "white" }}
                    >
                        صفحه اصلی
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className="nav-link"
                        activeClassName="pulsing-item"
                        activeStyle={{ color: "white" }}
                    >
                        پروژه ها
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        className="nav-link"
                        activeClassName="pulsing-item"
                        activeStyle={{ color: "white" }}
                    >
                        تماس با ما
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className="nav-link"
                        activeClassName="pulsing-item"
                        activeStyle={{ color: "white" }}
                    >
                        درباره ما
                    </NavLink>
                </li>
            </ul>
            <hr />

        </div>
    );
};

export default withRouter(Nav);
