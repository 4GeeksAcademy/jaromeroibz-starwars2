import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navevista = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)

	const [starship, setStarship] = useState([])


	useEffect(()=> {
		console.log('se cargo la vista nave')
		fetch('https://www.swapi.tech/api/starships/9')
		.then((response) => response.json())
        // .then((data) => console.log(data.result.properties))
		.then((data) => setStarship(data.result.properties))
	}, []) 

	return (
		<div className="jumbotron">
			<h1 className="display-4">Nave This will show the demo element: {params.nave_id}</h1>
			{starship.name}

			<p>Name: {starship.name} </p>
			<p>Model: {starship.model} </p>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Navevista.propTypes = {
	match: PropTypes.object
};
