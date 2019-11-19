import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { faChevronCircleLeft, fastart as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { Button, Table } from 'react-bootstrap';
import DisplayData from './DisplayData';

function Home() {
    const [data, setData] = useState([]);
    const [favourite, setFavorite] = useState([]);
    const [displayFavourite, setDisplayFavourite] = useState([]);
    const [showFavorite, setShowFavorite] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const result = await axios('https://api.punkapi.com/v2/beers');
            setData(result.data);
        }
        fetchData();
    }, []);

    const handleClick = (id) => {
        const value = favourite.includes(id);
        if (value) {
            const updatedValue = favourite.filter(obj => obj !== id);
            setFavorite(updatedValue); 
            const updatedData = data.filter(obj => updatedValue.includes(obj.id));
            setDisplayFavourite(updatedData);
        } else {
            setFavorite([...favourite, id ]);
        }
    }

    const handleFavourite = () => {
        const updatedData = data.filter(obj => favourite.includes(obj.id));
        setDisplayFavourite(updatedData);
        setShowFavorite(!showFavorite);
    }

    return (
        <div className="home">
            <Button variant="primary" onClick={handleFavourite}>
             {!showFavorite? 'Show Favourites': 'All Data'}
             </Button>
            <DisplayData data={displayFavourite} show={showFavorite} favourite={favourite} handleClick={handleClick}></DisplayData>
            <DisplayData data={data} show={!showFavorite} favourite={favourite} handleClick={handleClick}></DisplayData>
        </div>
    );
}

export default Home;
