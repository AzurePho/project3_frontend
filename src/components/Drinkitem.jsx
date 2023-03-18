import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";

const Drinkitem = () => {
    const [drink , setDrink]= useState([]);

    const {id} = useParams();

    useEffect(()=>{

        const fetchData = async () => {
            const data = await axios.get(`${API_URL}/drinks/${id}`);
            setDrink(data.data);

        };
        fetchData();
    },[]);

    console.log(data);


    return (
        <div className="view" >
            <ul>

            <li key={id}>
            <img src={drink.image} alt="" className="dink-image" />
                        <div>
                            <p className="drinkName">Name: {drink.name}</p>
                            <p className="drinkFlav">Flavor: {drink.flavour}</p>
                            <p className="drinkCal">Calories: {drink.calories}</p>
                            <p className="drinkAl">Alcohol content: {drink.alcohol}</p>
                            <Link to={`/drinks/${element.id}`}>
                                <button className="drinkCard">Delet!</button>
                            </Link>

                            <Link to={`/drinks/${element.id}`}>
                                <button className="drinkCard">Edit!</button>
                            </Link>
                         </div>
           </li>
           </ul>
        </div>
    )



}

export default Drinkitem;