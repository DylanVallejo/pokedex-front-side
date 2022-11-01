import React, { useEffect, useState } from 'react'
import styles from './Main.module.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Main =  () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState(" ");
    const [a, setA] = useState(0);
    const [b, setB] = useState(10);
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>{
                setPokemon(res.data)
            })      
            .catch(err=>{
                console.log(err)    
            })  
    }, []);
    
    const nextData =  (a,b) => {
        setA(a+10) 
        setB(b+10)
    }
    const previousData = (a,b) => {
        setA(a-10) 
        setB(b-10)
    }
    
    return (
        <div className={styles.mainContainer}>
            
            <div className={styles.searchContainer}>
                <label htmlFor="searchBar">Search</label>
                <input onChange={event=>{setSearch(event.target.value)}} className={styles.searchBar} />
                <button className={styles.paginationBtN} onClick={() =>{previousData(a, b)}}>prev</button>
                <button className={styles.paginationBtN} onClick={() =>{nextData(a, b)}}>next</button>
                
            </div>
            
            {pokemon.slice(a,b).filter((val) => {
                if (search === " " ){
                    return val
                }else if (val.name.toLowerCase().includes(search.toLowerCase()) || (val.type.toLowerCase().includes(search.toLowerCase())) ){
                    return val
                }
                }).map((key, index)=>{
                    return (
                        <div className={styles.mapContainer} key={index}>
                            <img className={styles.imgApi} src={key.image} alt="pokemons"/>
                            <div className={styles.infoContainer}>
                                <h2 className={styles.infoTitle} >
                                    {key.name}
                                </h2>
                                <p className={styles.mainDescription}><span>Type</span><br/>{key.type}</p>
                                <Button variant="primary" className={styles.cardDetailBtn} onClick={()=>{navigate('api/'+ key._id)}}>Details</Button>
                            </div>
                        </div>
                        )
                    }   
                ) 
            }
        </div>
    )
}

export default Main;