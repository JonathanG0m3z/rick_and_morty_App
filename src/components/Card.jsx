import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state)=>state.myFavorites);
  const location = useLocation();

  const [isFav, setIsFav] = React.useState(false);

  const handleFavorite = (e)=>{
    if(isFav){
      dispatch(deleteFavorite(e.target.id));
      setIsFav(false);
    }
    if (!isFav) {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  }
  React.useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  return (
    <>
        <div className={styles.divCard}>
          <div className={styles.divButton}>
          {
            isFav ? (<button id={props.id} onClick={handleFavorite}>❤️</button>) : 
            (<button id={props.id} onClick={handleFavorite}>🤍</button>)
          }
            {location.pathname!== '/favorites' && <button className={styles.buttonCard} onClick={() => props.onClose(props.id)}>x</button>}
          </div>
          <h2 className={styles.name}>{props.name}</h2>
          <Link to={`/detail/${props.id}`}>
          <img src={props.image} alt="" />
          </Link>
          <div className={styles.divInfo}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
          </div>
        </div>
    </>
  );
}
