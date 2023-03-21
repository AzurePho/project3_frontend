import {Link} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "../Index.css";
import"../style/Navbar.css";


const  Navbar =() => {
    const navigate = useNavigate();

    const logoutDrink = (id) => {
        console.log(id)

        try{
            axios.defaults.headers.common["Authorization"]=`Bearer ${""}`;
            navigate("/");
        }catch(err){
            console.log(err);
        }
    };




    return (
        <nav>
            <ul className="nav-links">
                <li className="nav-item" >
                    <Link to="" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/drinks">Drinks</Link>

                </li>
                <li className="nav-item">
                    <Link to="/register" >Register</Link>
                </li>
                <li className="nav-item-login">
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <a className="nav-item-logout" onClick={()=>logoutDrink(4)}>Logout</a>
                    
                </li>
            </ul>
        </nav>

    )
};

export default Navbar;

