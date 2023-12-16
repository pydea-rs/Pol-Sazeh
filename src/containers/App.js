import React from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../project/Projects";
import About from "../about/About";
import Nav from "../common/Nav";
import { Container, Row, Col } from "react-bootstrap";
import ContactUs from "../about/ContactUs";
import SideBar from "../common/SideBar";
import Socials from "../common/Socials";
import ProjectDetails from "../project/ProjectDetails";
import config from "../config";

const App = () => {
    return (
        <div id="outer-container">
            <SideBar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
            />
            <div id="page-wrap">
                <Container>
                    <Row className="justify-content-center">
                        <Nav />
                    </Row>
                    <Row>
                        <Col>
                            <Switch>
                                <Route
                                    path={`/${config.sources.projects}/:path?`}
                                    exact
                                >
                                    <Switch>
                                        <Route path="/" exact>
                                            <Projects />
                                        </Route>
                                        <Route>
                                            <ProjectDetails />
                                        </Route>
                                    </Switch>
                                </Route>
                                {/* <Route path={`/${config.sources.projects}`} exact component={Projects} /> */}
                                <Route path="/about" component={About} />
                                <Route path="/contact" component={ContactUs} />
                                <Route path="/" exact component={Projects} />
                            </Switch>
                        </Col>
                    </Row>
                    <Row>
                        <Socials />
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default App;
