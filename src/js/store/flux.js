import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Home } from "../views/home";

const getState = ({ getStore, getActions, setStore }) => {
	const params = useParams();
	return {
		store: {
			urlBase: 'https://www.swapi.tech/api/',
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {

				// 	// state.actions.loadSomeData();


			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {

				fetch(`${getStore().urlBase}/people`)
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((response) => response.json())
								.then((data) => {
									setStore({
										characters: [...getStore().characters, data.result]
									})
								})
						}
					})

			},
			getPlanets: () => {

				fetch(`${getStore().urlBase}/planets`)
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((response) => response.json())
								.then((data) => {
									setStore({
										planets: [...getStore().planets, data.result]
									})
								})
						}
					})

			},
			addFavorites: (item) => {
				let exist = getStore().favorites.some((fav) => item.properties.name == fav)
				console.log(exist)
				console.log(item)
				if (exist) {
					let newArray = getStore().favorites.filter((fav) => item != fav)
					setStore({
						favorites: newArray
					})
				} else {
					setStore({
						favorites: [...getStore().favorites, item.properties.name]
					})
				}
			},
			deleteFavorite: (item) => {

				let newArray = getStore().favorites.filter((fav) => item != fav)
				setStore({
					favorites: newArray
				})
			}
		}
	};
};

export default getState;
