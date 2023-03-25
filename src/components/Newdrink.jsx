import {useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import {CSSTransition} from "react-transition-group"


import "../Index.css";
// import "./Drink.css"

const Newdrink = () => {
    const navigate = useNavigate();
    const [drink , setDrink]= useState([]);
    const [edit , setEdit] = useState("");
    const [nonEdit , setNonEdit]= useState(true);
    const [error , setError]= useState("");
    const [confirmationMessage , setConfirmationMessage]=useState("");
    const [foundId , setFoundId]= useState(localStorage.userId);
    
    
    

    const initialFormData = 
    {
        name: "",
        flavour: "",
        alcohol: false,
        image: "",
      };

      const [formData , setFormData]= useState(initialFormData); 




    
    const updateN = axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
    console.log(updateN);




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
        const {data} = await axios.post(`${API_URL}/drinks`, {...formData,image:"./pages/beer-default.jpeg"});
        console.log(formData);
        console.log(data);
       
        navigate("/drinks");

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
        
       

<div className="createpage" >
{/* {error && (<h4 className="alert-failure">{error}</h4>)} */}

    <div className="containerAlbum" >

            

                     <form className="Create-form" onSubmit={onSubmit}>
                           {inputFields.map((input)=>{
                            return( input.type === "select"?
                            <><select onChange={onChange}><option>true</option><option>false</option></select></>:
                            <input placeholder={input.placeholder}
                            name={input.name}
                            value={formData[input.name]}
                            type={input.type}
                            onChange={onChange}/>
                            
                            )})}

                        <Button type="submit"> ADD!</Button>
                        
                     </form>   
      
            
        </div>
</div>

    )



}

export default Newdrink;




