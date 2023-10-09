import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () =>
	{
		const { store, actions } = useContext(Context);
		
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Favorites
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item) => {`<a className="dropdown-item" href="#">${item}</a>`})}
						</div>
					</div>
				</div>
			</nav>
				);
	}
