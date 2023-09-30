import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import {Context} from "../store/appContext";
import "../../styles/home.css";
import {Home} from "../views/home";

export const Nave = (props) => {
    const {store, actions} = useContext(Context);
    const [starships, setStarships] = useState([])
    const params = useParams();
    console.log(params)

    useEffect(()=> {
		console.log('se cargo la vista nave')
		fetch('https://www.swapi.tech/api/starships' + params.nave_id )
		.then((response) => response.json())
        // .then(data => (setStarships(console.log(data))))
		.then((data) => setStarships(data.results))
	}, [])


    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <Link to={"/nave-info/1" + props.uid} className="btn btn-primary">
					<span>Link to:</span>
				</Link>
            </div>
        </div>
    );

};
