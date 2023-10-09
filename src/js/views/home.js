import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom"

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const params = useParams();
	
	return(
	<div className="container">
		<div className="container py-5">
			<h1 className="text-danger">Characters</h1>
			<div className="my-carousel py-5">

				{store.characters.map((item, id) => {
					return(
						<div className="my-card mx-3">
							<div className="card" style={{width: "18rem"}}>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{item.properties.name}</h5>
								<p className="card-text"><strong>Name:</strong> {item.properties.name}</p>
								<p className="card-text"><strong>Gender:</strong> {item.properties.gender}</p>
								<p className="card-text"><strong>Hair Color:</strong> {item.properties.hair_color}</p>
								<p className="card-text"><strong>Eye Color:</strong> {item.properties.eye_color}</p> 

								<Link to={`/characters/${item._id}`} href="#" className="btn btn-primary">Learn More</Link>
								<button className="btn btn-primary mx-4" onClick={() => {actions.addFavorites(item)}}>Favorites</button>
							</div>
							</div>
						</div>
					)	
					}
				)}
			</div>

		</div>
		<div className="container py-5">
			<h1 className="text-danger">Planets</h1>
			<div className="my-carousel py-5">

				{store.planets.map((item) => {
					return(
						<div className="my-card mx-3">
							<div className="card" style={{width: "18rem"}}>
								<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..."></img>
							<div className="card-body">
								<h5 className="card-title">{item.properties.name}</h5>
								<p className="card-text"><strong>Name:</strong> {item.properties.name}</p>
								<p className="card-text"><strong>Diameter:</strong> {item.properties.diameter}</p>
								<p className="card-text"><strong>Population:</strong> {item.properties.population}</p>
								<p className="card-text"><strong>Climate:</strong> {item.properties.climate}</p> 

								<Link to= {`/planets/${item._id}`}href="#" className="btn btn-primary">Learn More</Link>
								<button className="btn btn-primary mx-4" onClick={actions.addFavorites}>Favorites</button>
							</div>
							</div>
						</div>
					)	
					}
				)}
			</div>

		</div>
	</div>
	
	)
}




