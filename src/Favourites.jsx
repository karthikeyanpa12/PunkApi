import React from 'react';
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Favourites({ data = [], favorites }) {

    return (
        <div className="detail">
            <span className="back-button">
                <FontAwesomeIcon icon={faChevronCircleLeft} />
                <Link to="/" > Back to List </Link>
            </span>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><img src={item.image_url} style={{ width: 30, height: 30 }} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Favourites;
