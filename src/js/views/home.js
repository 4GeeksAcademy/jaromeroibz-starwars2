import React, { useContext } from "react";
import "../../styles/home.css";
import {Nave} from "../component/nave"
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);
	// const params = useParams();
	return(

	<div className="text-center mt-5">
		<h1>Home</h1>
		<h6>DEsde Flux</h6>
		{store.naves.map( (item) => <Nave key = {item.uid} name={item.name}/>)}
	</div>
	)
}




