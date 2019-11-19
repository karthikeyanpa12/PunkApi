import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { faChevronCircleLeft, fastart as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table } from 'react-bootstrap';

function DisplayData({ data, show, favourite, handleClick }) {
    return (
        <div className="home">
            {show && <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Favorites</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td onClick={() => handleClick(item.id)}>
                                {favourite.includes(item.id) &&
                                    <FontAwesomeIcon icon={regularStar} />
                                }
                            </td>
                            <td><Link to={`/product/${item.id}`}>{item.name}</Link></td>
                            <td><Link to={`/product/${item.id}`}>{item.description}</Link></td>
                            <td><img src={item.image_url} style={{ width: 30, height: 30 }} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>}
        </div>
    );
}

export default DisplayData;
