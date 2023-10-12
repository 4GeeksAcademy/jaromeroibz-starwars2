import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () =>
	{
		const { store, actions } = useContext(Context);
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars</span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((item) => {
							return (
								<div className="nowrap">
								<li key={item._id}><a className="dropdown-item" href="#">{item}<span className="px-3" onClick={() => actions.deleteFavorite(item)}><FontAwesomeIcon icon={faTrash} /></span></a></li>
								</div>
							)
							})}
						{/* <li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li> */}
					</ul>
				</div>
				{/* {store.favorites} */}
				{/* {store.favorites.map((item) => {`<a className="dropdown-item" href="#">${item}</a>`})} */}
			</nav>
			
				);
	}
