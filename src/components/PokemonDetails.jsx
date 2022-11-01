
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './PokemonDetails.module.css';
import axios from "axios";


const  PokemonDetails =  () => {
    
    const {idPokemon} = useParams();
    const [data, setData] = useState([]);  
    const url = `https://pkmserver.herokuapp.com/api/${idPokemon}`
    // const url = `http://localhost:8000/api/${idPokemon}`
    
    const navigate = useNavigate();
    
    
    useEffect(() => {
        axios.get(url)
        .then( res =>{
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)    
        })  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    
    return(
        <div className={styles.infoMainContainer}>
            <div className={styles.detailImgContainer}>
                <img className={styles.detailImg} src={data.image} alt="pokemons"/>
            </div>
            <div className={styles.detailInfoContainer}>
                
                <table className={styles.tableData}>
                    <tbody>
                        <tr>
                            <th>{data.name}</th>
                        </tr>
                        <tr>
                            <th><span className={styles.spanLines}>Description</span></th>
                            <td><p className={styles.descriptionPkmn}>{data.description}</p></td>
                        </tr>
                        <tr>
                            <th><span className={styles.spanLines}>Types</span></th>
                            <td><p className={styles.descriptionPkmn}>{data.type}</p></td>
                        </tr>
                        <tr>
                            <th><span className={styles.spanLines}>Evolutions</span></th>
                            <td><p className={styles.descriptionPkmn}>{data.evolution}</p></td>
                        </tr>
                        <tr>
                            <th><span className={styles.spanLines}>Height(ft.)</span></th>
                            <td><p className={styles.descriptionPkmn}>{data.height}</p></td>
                        </tr>
                        <tr>
                            <th><span className={styles.spanLines}>Weight(Lbs.)</span></th>
                            <td><p className={styles.descriptionPkmn}>{data.weight}</p></td>
                        </tr>
                    </tbody>
                </table>
                <Button className={styles.detailBtn} onClick={()=>{navigate('/')}}>Home</Button>            
            </div>
        </div>
    )
    
}

export default PokemonDetails;