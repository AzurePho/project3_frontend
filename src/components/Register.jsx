import axios from "axios";
import { useState } from "react"
// import "./../style/Auth.css";
import {API_URL} from "../consts";
import "../Index.css";
import "../style/Auth.css";


const Register = () => {
    const [confirmationMessage , setConfirmationMessage]=useState("");
    const [error , setError]= useState("");
    const initialFormData = {
        userName:"",
        email: "",
        passWord: "",
        confirmPsaaword: ""
    };
    const [formData , setFormData]= useState(initialFormData);
   
    const onChange = (e)=> {
        setConfirmationMessage("");
        setError("");
        console.log({...formData, [e.target.name]:e.target.value});
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(`${API_URL}/register`, formData);
            console.log(formData);
            console.log(res);
            setConfirmationMessage(res.data.message);
            setFormData(initialFormData);

        }catch(err){
            setError(err.response.data.message);
            console.log(err);
        }
    }
        const inputFields = [
            {
                placeholder: "Username",
                name: "userName",
            },
            {
                placeholder: "Email",
                name: "email",
            },
            {
                placeholder: "Password*",
                name: "password",
            },
            {
                placeholder: "Confirmpassword",
                name: "confirmPassword",
            }
        ];

            return (
                <div className="viewRegister">
                    <video autoPlay loop  className="backVideo" src="../pages/pexels.mp4">
    
                    </video>
                    <h1>Register</h1>
                    {confirmationMessage ?(
                        <h4 className="alert-success">
                            {confirmationMessage}
                        </h4>)
                       :error ?(
                            <h4 className="alert-failure">
                                {error}
                            </h4>):null}
 
                    <form className="auth-form" onSubmit={onSubmit}>
                        {inputFields.map((input)=>{
                            return(
                            <input placeholder={input.placeholder}
                            name={input.name}
                            value={formData.name}
                            onChange={onChange} />
                            )

                        })}

                        <button type="submit"> Register!</button>
                        
                     </form>        
    
                   
                </div>
            )
        
   

}

export default Register;