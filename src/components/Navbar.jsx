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
        localStorage.removeItem("userId");

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
                <li >
                    <img className="nav-image" src="../pages/download22.png" alt="" />
                </li>
                <li className="nav-item" >
                    <Link to="" >Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/drinks">Drinks</Link>

                </li>
                {loggedIn ?<li>
                    <a className="nav-item" onClick={()=>logoutDrink(4)}>Logout</a>
                        </li>: 
                <>
                <li className="nav-item">
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

