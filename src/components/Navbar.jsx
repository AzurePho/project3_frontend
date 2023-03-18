import {Link, link} from "react-router-dom";


const  Navbar =() => {
    return (
        <nav>
            <ul className="nav-lines">
                <li className="nav-item" >
                    <Link to="" >HomePage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/drinks">Drinks</Link>

                </li>
                <li className="nav-item">
                    <Link to="/register" >Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>

    )
};

export default Navbar;