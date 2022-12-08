import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css"

export default function Detail() {
    const {detailId} = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert(err);
           });
     }, [detailId]);

     return(
        <div className={styles.divContenedor}>
         <div>
            <h1>Nombre: {character.name}</h1>
            <h2>Especie: {character.species}</h2>
            <h2>Género: {character.gender} </h2>
            <h2>Estado: {character.status} </h2>
            {character.location ? <h2>Ubicación actual: {character.location.name} </h2> : <h2></h2>}
            {character.origin ? <h2>Origen: {character.origin.name} </h2> : <h2></h2>}
         </div>
         <div>
            <img src={character.image} alt="" />
         </div>
        </div>
     )
}