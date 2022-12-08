import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { connect } from "react-redux";
import React from "react";

export const Card = (props)=> {
  const [isFav, setIsFav] = React.useState(false);

  const handleFavorite = (e)=>{
    if(isFav){
      setIsFav(false);
      props.deleteFavorite(e.target.key);
    }
    if (!isFav) {
      setIsFav(true);
      props.addFavorite(props);
    }
  }
//   React.useEffect(() => {
//     props.myFavorites.forEach((fav) => {
//        if (fav.id === props.id) {
//           setIsFav(true);
//        }
//     });
//  }, [props.myFavorites]);
  return (
    <>
        <div className={styles.divCard}>
          <div className={styles.divButton}>
          {
            isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
            (<button onClick={handleFavorite}>🤍</button>)
          }
            <button className={styles.buttonCard} onClick={() => props.onClose(props.id)}>x</button>
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

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addFavorite: ()=>dispatch(addFavorite()),
//     deleteFavorite: ()=>dispatch(deleteFavorite())
//   }
// }
// const mapStateToProps = (state)=>{
//   return{
//     myFavorites: state.myFavorites
// }
// }
// export const conex = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Card)
