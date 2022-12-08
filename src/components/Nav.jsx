import SearchBar from "./SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav(props) {
    return(
        <nav className={styles.nav}>
            <Link className={styles.link} to="/home">
                <span>Home</span>
            </Link>
            <Link className={styles.link} to="/about">
               <span>About</span> 
            </Link>
            <SearchBar
                onSearch={props.onSearch}
            />
            <button name="logOut" onClick={()=>props.logOut()}>LogOut</button>
        </nav>
    )
}