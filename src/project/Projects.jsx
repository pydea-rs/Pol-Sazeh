import React, { useContext } from "react";
import SingleProjectCard from "./SingleProjectCard";
import MainContext from "../containers/MainContext";
import { Row } from "react-bootstrap";

const Projects = () => {
    const projects = useContext(MainContext)?.projects;

    return (
        <Row className="justify-content-center">
            {projects instanceof Array && projects.length > 0 ? (
                projects.map((project) => (
                    <SingleProjectCard>{project}</SingleProjectCard>
                ))
            ) : (
                <div className="alert alert-light mt-3 w-75 mx-auto">
                    <p className="text-center">
                        مشکلی در بارگذاری پروژه ها پیش آمده است.
                    </p>
                </div>
            )}
        </Row>
    );
};

export default Projects;
