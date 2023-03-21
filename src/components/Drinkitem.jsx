import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../Index.css";
// import "./Drink.css"

const Drinkitem = () => {
    const navigate = useNavigate();
    const [drink , setDrink]= useState([]);
    const [error , setError]= useState("");

    const {id} = useParams();

    // console.log(id);
    useEffect(()=>{

        const fetchData = async () => {
            const {data}= await axios.get(`${API_URL}/drinks/${id}`);
            setDrink(data.data);
            // console.log(id);
            console.log(data.data);

        };
        setTimeout(fetchData, 500);
     
    },[]);

    // console.log(data);


//     const onSubmit = async(e) => {

//         e.preventDefault();
//         console.log(drink);
//         try {
//             const {data} = await axios.delete(`${API_URL}/drinks/:id`,drink);
            
//             navigate("/drinks");
            
//         }catch(err){
//             setError(err.response.data.message);
//             console.log(err);
//         }
// };


const deleteDrink = async (id) => {

    try{
        await axios.delete(`${API_URL}/drinks/${id}`);
        navigate("/drinks");
    }catch(err){
        console.log(err);
        setError(err.response.data.message);
    }
};


    return (
        
       

<div className="page" >
{error && (<h4 className="alert-failure">
                                {error}
                            </h4>)}
    <div className="containerAlbum" >

    <h1>drink item</h1>

    
            <ul>

            <li key={id}>
            <img src={drink.image} alt="" className="imageAlbum" />
           
                        <div>
                            <p className="drinkName">Name: {drink.name}</p>
                            <p className="drinkFlav">Flavor: {drink.flavour}</p>
                            <p className="drinkCal">Calories: {drink.calories}</p>
                            <p className="drinkAl">Alcohol content: {drink.alcohol}</p>
                            
                            <button className="delet-button" onClick={()=>deleteDrink(drink._id)}>Delete!</button>
                         

                            <Link to={`/drinks/${id}/edit`}>
                                <button className="drinkCard">Edit!</button>
                            </Link>
                         </div>
           </li>
           </ul>
           </div>
        </div>

    )



}

export default Drinkitem;








