import React, { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { Context } from "../store/appContext";


const Detail = () => {
    const params = useParams()
    const [search, setSearch] = useState({})
    
    const {store} = useContext(Context)

    const details = () =>{
        if (params.nature == "characters"){
            const searchFind = store.characters.find((item) => item._id == params.id)
            setSearch(searchFind)
            }else{
            const searchFind = store.planets.find((item) => item._id == params.id)
            setSearch(searchFind)
            }
        
    }
    
    useEffect(() => {
        details()
    }, [])
    if (params.nature == "characters"){

    return(
    <div className="detail-container">
        <div className="detail"> 
            <div className="photo">
                <img className="detail-img p-3" src={`https://starwars-visualguide.com/assets/img/${params.nature}/${search?.uid}.jpg`} alt=""></img>
            </div>
            <div className="text">
                <h1 className="p-3">{search?.properties?.name}</h1>
                <p className="paragraph p-3">{search?.description}</p>   
            </div>
        </div>
        <div className="row">
            <hr></hr>
            <div className="col-sm py-3">
            <strong>Name</strong>
            <br></br>
            {search?.properties?.name}
            </div>
            <div className="col-sm py-3">
            <strong>Birth Year</strong>
            <br></br>
            {search?.properties?.birth_year}
            </div>
            <div className="col-sm py-3">
            <strong>Gender</strong>
            <br></br>
            {search?.properties?.gender}
            </div>
            <div className="col-sm py-3">
            <strong>Height</strong>
            <br></br>
            {search?.properties?.height}
            </div>
            <div className="col-sm py-3">
            <strong>Skin Color</strong>
            <br></br>
            {search?.properties?.skin_color}
            </div>
            <div className="col-sm py-3">
            <strong>Eye Color</strong>
            <br></br>
            {search?.properties?.eye_color}
            </div>
        </div>
    </div>
    )
    }
    else{
    return(
        <div className="detail-container">
            <div className="detail"> 
                <div className="photo">
                    <img className="detail-img p-3" src={`https://starwars-visualguide.com/assets/img/${params.nature}/${search?.uid}.jpg`} alt=""></img>
                </div>
                <div className="text">
                    <h1 className="p-3">{search?.properties?.name}</h1>
                    <p className="paragraph p-3">{search?.description}</p>   
                </div>
            </div>
            <div className="row">
                <hr></hr>
                <div className="col-sm py-3">
                <strong>Name</strong>
                <br></br>
                {search?.properties?.name}
                </div>
                <div className="col-sm py-3">
                <strong>Climate</strong>
                <br></br>
                {search?.properties?.climate}
                </div>
                <div className="col-sm py-3">
                <strong>Population</strong>
                <br></br>
                {search?.properties?.population}
                </div>
                <div className="col-sm py-3">
                <strong>Orbital Period</strong>
                <br></br>
                {search?.properties?.orbital_period}
                </div>
                <div className="col-sm py-3">
                <strong>Rotation Period</strong>
                <br></br>
                {search?.properties?.rotation_period}
                </div>
                <div className="col-sm py-3">
                <strong>Diameter</strong>
                <br></br>
                {search?.properties?.diameter}
                </div>
            </div>
        </div>
        )
    } 
}

export default Detail;