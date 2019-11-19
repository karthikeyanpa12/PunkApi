import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Detail() {
    const [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const result = await axios(`https://api.punkapi.com/v2/beers/${id}`);
            setData(result.data);
        }
        fetchData();
    }, []);

    return (
        <div className="details">
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

export default Detail;
