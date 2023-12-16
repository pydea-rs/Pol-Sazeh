import { Col, Row } from "react-bootstrap";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Socials = () => {
    return (
        <Row
            style={{ background: "transparent" }}
            className="w-100 text-center my-5"
        >
            <Col>
                <SocialIcon className="mx-1" url="https://www.instagram.com/mehrzad_construction_group" />
                <SocialIcon className="mx-1" url="https://www.telegram.me/pya_py" />
                <SocialIcon className="mx-1" url="https://www.whatsapp.com/" />
                
            </Col>
        </Row>
    );
};

export default Socials;