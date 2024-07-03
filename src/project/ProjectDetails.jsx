import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router";
import MainContext from "../containers/MainContext";
import Gallery from "../gallery/Gallery";
import "./project.css";
import { sources } from "../config";
const ProjectDetails = () => {
    const context = useContext(MainContext);
    const [project, setProject] = useState(null);
    const currentRoute = useLocation();

    useEffect(() => {
        try {
            const route = currentRoute?.pathname ?? document.URL;
            console.log(route)
            if (route) {
                const routSections = route.split("/");
                console.log(routSections);
                if (routSections instanceof Array) {
                    const routeId = +routSections[routSections.length - 1];
                    if (context) {
                        const { projects } = context;
                        const project =
                            projects instanceof Array
                                ? projects.find((p) => p.id === routeId)
                                : null;
                        project.images = project.images.map((x) => {
                            const img = require(`../${sources.resources}/${project.source}/${x}`);
                            return img;
                        });
                        setProject(project);
                    }
                }
            }
        } catch (ex) {
            console.log(ex);
            setProject(null);
        }
    }, [context, currentRoute]);
    return project ? (
        <Container>
            <Row className="w-100 text-center m-0 p-0 mb-3">
                <h1 className="w-100 text-center mt-0 mb-1 text-primary">
                    {project.title}
                </h1>
            </Row>
            <Row>
                <Gallery>{project.images}</Gallery>
            </Row>
            <Row className="mb-5">
                <Container className="mx-0 px-0">
                    <Row className="m-0 p-0">
                        <Col md={3} sm={1} xs={1}></Col>
                        <Col md={6} sm={10} xs={10}>
                            <Row className="justify-content-center">
                                <Col className="project-detail-text">آدرس:</Col>
                                <Col className="text-center text-warning">
                                    {project.address}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col className="project-detail-text">
                                    تعداد طبقات:
                                </Col>
                                <Col className="text-center text-warning">
                                    {project.floors}
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col className="project-detail-text">
                                    متراژ:
                                </Col>
                                <Col className="text-center text-warning">
                                    {project.meterage}
                                </Col>
                            </Row>
                        </Col>

                        <Col md={3} sm={1} xs={1}></Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                توضیحات: &nbsp;
                <span className="text-warning">{project.details}</span>
            </Row>
            <Row>
                <p className="project-detail-text">
                    کمی پایین تر اگر ویدیو باشه مثل عکس ها براش کورسل میزاریم
                </p>
            </Row>
        </Container>
    ) : (
        <Container>
            <Row
                style={{
                    borderRadius: "1rem",
                    border: "1px solid red",
                    color: "red",
                }}
                className="p-5"
            >
                هیچ پروژه ای انتخاب نشده است! در صفحه اصلی یک پروژه رو انخاب کن ...
            </Row>
        </Container>
    );
};

export default ProjectDetails;
