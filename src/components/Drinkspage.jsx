import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";

const Drinkspage = ()=> {
    const [data , setData]= useSatae([]);
    const [isLoading, setISLoading]= useState(true);

    useEffect (()=> {
        const fetchData = async()=> {
            const {data} = await axios.get(`${API_URL}/drinks`);
            setData(data);
            setISLoading(false);
        };
        setTimeout(fetchData, 500);
        }, []);
    



return (
    <div className="view" >

        <h1>drinks page</h1>
        <ul>
            {data.map((element)=> {
               
                    <ul>
                    <li key={element._id} className="drinkspage">
                        <img src={element.image} alt="" className="dink-image" />
                        <div>
                            <p className="drinkName">Name: {element.name}</p>
                            <p className="drinkFlav">Flavor: {element.flavour}</p>
                            <p className="drinkCal">Calories: {element.calories}</p>
                            <p className="drinkAl">Alcohol content: {element.alcohol}</p>
                            <Link to={`/drinks/${element.id}`}>
                                <button className="drinkCard">Click!</button>
                            </Link>
                        </div>


                    </li>
                    </ul>
                
            })}
        </ul>


    </div>

)

        };

        export default Drinkspage;