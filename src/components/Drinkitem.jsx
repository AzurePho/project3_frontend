import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import {CSSTransition} from "react-transition-group"

import "../Index.css";
// import "./Drink.css"

const Drinkitem = () => {
    const navigate = useNavigate();
    const [drink , setDrink]= useState([]);
    const [edit , setEdit] = useState("");
    const [nonEdit , setNonEdit]= useState(true);
    const [error , setError]= useState("");
    const [confirmationMessage , setConfirmationMessage]=useState("");
    
    

    const initialFormData = 
    {
        name: "",
        flavour: "",
        alcohol: false,
        image: "",
      };

      const [formData , setFormData]= useState(initialFormData); 
    

   
    

      const {id} = useParams();
       console.log(id);




    useEffect(()=>{

        const fetchData = async () => {
            const {data}= await axios.get(`${API_URL}/drinks/${id}`);
            setDrink(data.data);
            // console.log(id);
            console.log(data.data);
            // setFormData({...formData, name: drink.name,
            //         flavour: drink.flavour,
            //         calories: drink.calories,
            //         alcohol: drink.alcohol,
            //         image: drink.image,})

        };
        setTimeout(fetchData, 500);
     
    },[]);

    // const initialFormData = 
    // {
    //     name: drink.name,
    //     flavour: drink.flavour,
    //     calories: drink.calories,
    //     alcohol: drink.alcohol,
    //     image: drink.image,
    //   };


    //   console.log(initialFormData);

    //   const initialFormData = 
    // {
    //     name: "",
    //     flavour: "",
    //     calories: "",
    //     alcohol: "",
    //     image: "",
    //   };

    //   const [formData , setFormData]= useState(initialFormData); 



    
    const updateN = axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
    console.log(updateN);

const deleteDrink = async (id) => {

    try{
        await axios.delete(`${API_URL}/drinks/${id}`);
        navigate("/drinks");
    }catch(err){
        console.log(err);
        setError(err.response.data.message);
        console.log(error);
    }
};

const editDrink = (id) => {

    if(localStorage.token){
       setEdit(true);
       setNonEdit(false);
    }
   };

const onChange = (e)=> {
    setConfirmationMessage("");
    setError("");
    console.log({...formData, [e.target.name]:e.target.value});
    setFormData({...formData, [e.target.name]:e.target.value});
};


const onSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    
    try {
        const {data} = await axios.patch(`${API_URL}/drinks/${id}`, formData);
        console.log(formData);
        console.log(data);
        // setConfirmationMessage(res.data.message);
        // setFormData(initialFormData);

    }catch(err){
        // setError(err.response.data.message);
        console.log(err);
    }};





const inputFields = [
    {
        placeholder: "name",
        name: "name",
        type:"text"
    },
    {
        placeholder: "flavour",
        name: "flavour",
        type:"text"
    },
  
    {
        placeholder: "alcohol",
        name: "alcohol",
        type:"select"
    },
    {
        placeholder: "image",
        name: "image",
    }
];



    return (
        
       

<div className="drinkpage" >
{error && (<h4 className="alert-failure">{error}</h4>)}

    <div className="containerAlbum" >

   

    
    { nonEdit &&


            
            <div className="containerAlbuminside">
            <img src={drink.image} alt="" className="imageAlbum" />


            

                        <div>
                            <p className="drinkName">Name: {drink.name}</p>
                            <p className="drinkFlav">Flavor: {drink.flavour}</p>
                            <p className="drinkCal">Calories: {drink.calories}</p>
                            <p className="drinkAl">Alcohol content: {drink.alcohol}</p>
                            <section className="sectionCard">
                            <Button className="delete-button" onClick={()=>deleteDrink(drink._id)}>Delete!</Button>
                         

                            {/* <Link to={`/drinks/${id}/edit`}> */}
                                <Button className="drinkCard"  onClick={()=>editDrink(drink._id)}>Edit!</Button>
                            {/* </Link> */}
                            </section>
                         </div> 
            </div>
          
                         
                         
                         }


                          

                     {edit &&


                     

                     <form className="edit-form" onSubmit={onSubmit}>
                           {inputFields.map((input)=>{
                            return( input.type === "select"?
                            <><select onChange={onChange}><option>true</option><option>false</option></select></>:
                            <input placeholder={input.placeholder}
                            name={input.name}
                            value={formData[input.name]}
                            type={input.type}
                            onChange={onChange}/>
                            
                            )})}

                        <Button type="submit"> Edit!</Button>
                        
                     </form>   
                      
                     
                    }




                            
                         
          
            
        </div>
</div>

    )



}

export default Drinkitem;








