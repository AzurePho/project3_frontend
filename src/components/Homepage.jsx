import "../Index.css";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
const Homepage = () => {
    return(
        <div className="homepage" >
            <div className="containerHome">
        <h1>Drink ENJOY!</h1>
        <h3>chose your drink<br/>know which drink you like!</h3>
        <Link to={`/drinks`}>

          <Button className="drinkButtonHome">Drink!</Button>

        </Link>
        </div>
        </div>
    )
}

export default Homepage;