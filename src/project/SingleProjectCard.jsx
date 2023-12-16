import React from "react";
import { Card } from "react-bootstrap";
import './project.css';
import {sources} from '../config';

const SingleProjectCard = ({children}) => {
    const { title, thumbnail, isCompleted, source } = children;
    const MehrzadThumbnail = require(`../${sources.resources}/${source}/${thumbnail}`);

    return (
        <Card bg="dark" className="m-2 project-card" style={{ width: "18rem" }}>
            <Card.Link href={source}><Card.Img variant="top" src={MehrzadThumbnail} />
            </Card.Link> 
            <Card.Body>
                <Card.Text className="text-white text-center">{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleProjectCard;
