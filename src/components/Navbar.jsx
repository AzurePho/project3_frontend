import {Link} from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
// import "../Index.css";
import"../style/Navbar.css";


const  Navbar =() => {
    const [loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // if there is a token, we set the user to be logged in,
        // if not, loggedIn will be set to false
        setLoggedIn(localStorage.getItem("token") ? true : false)
    }, [location])

    const navigate = useNavigate();

    const logoutDrink = (id) => {
        console.log(id)
        localStorage.removeItem("token");

        try{
            axios.defaults.headers.common["Authorization"]="";
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
                {loggedIn ?<li>
                    <a className="nav-item-logout" onClick={()=>logoutDrink(4)}>Logout</a>
                        </li>: 
                <>
                <li className="nav-item-login">
                <Link to="/login">Login</Link>
            </li>
                <li className="nav-item">
                    <Link to="/register" >Register</Link>
                </li>
                </>
                }

            </ul>
        </nav>

    )
};

export default Navbar;

