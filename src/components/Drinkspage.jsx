import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link } from "react-router-dom";
import "../Index.css";
import "./Drink.css"
// import "bootstrap/dist/css/bootstrap.min"
import { Container , Row , Col, Card , Badge , Button} from "react-bootstrap";





const Drinkspage = ()=> {
    const [data , setData]= useState([]);
    const [foundId , setFoundId]= useState(localStorage.userId);
    const [isLoading, setISLoading]= useState(!localStorage.userId);



    useEffect (()=> {
        const fetchData = async()=> {
            const {data} = await axios.get(`${API_URL}/drinks`);

            setData(data);
            // setISLoading(false);
            // console.log(data);
        };
        setTimeout(fetchData, 500); 
        // fetchData();
        }, []);




axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.token}`;
 

const onChange = async(drinkData,id) => {

   const initialFormData = 
    {
        name: drinkData.name,
        flavour: drinkData.flavour,
        alcohol: drinkData.alcohol,
        image: drinkData.image,
      };
 
  try{
    await axios.post(`${API_URL}/drinks`,initialFormData);
    const {data} = await axios.get(`${API_URL}/drinks`);

    setData(data);
    setFoundId("");
    setISLoading(true);
   
    // navigate(`/drinks/${id}`);
}catch(err){
    console.log(err);
    // setError(err.response.data.message);
    // console.log(error);
}


};








  return (

    <div className="page" >

     <h1>drinks page</h1>
       <div className="containerD" >
       
       <Row xs={1} md={3} className="g-4">
      {data.map((element)=> {
        return (
        <Col className="Drinkcol" key={element._id}>
       
       
          <Card className="Drinkcontain">
            <Card.Img className="drink-image" variant="top" src={element.image} />
            <Card.Body className="drink-text">
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>
              
               {isLoading && (<Link to={`/drinks/${element._id}`}>

                 <Button className="drinkButtonDrink">Click!</Button>
                
                </Link>)} 

                { foundId && (<Button className="drinkButtonDrink" onClick={()=>{onChange(element,element._id)}}>Add </Button>)}
                
              </Card.Text>
            </Card.Body>
          </Card>
          
          </Col>)
      })}
     
       </Row>
           </div>
      </div>
   
  )

};

export default Drinkspage;

































// return (
//     <div className="page" >

//         <h1>drinks page</h1>
//         <div className="containerD" >
//         <ul className="Drinkcontain">
//             {data.map((element)=> {
//                return(
                    
//                     <li key={element._id} className="musicclass">
                        
//                         <img src={element.image} alt="" className="drink-image" />
//                         <div>
//                             <p className="drinkTitle">Name: {element.name}</p>
                         
//                             <Link to={`/drinks/${element._id}`}>
//                                 <button className="musicCard">Click!</button>
//                             </Link>
//                         </div>


//                     </li>
//                )
                
//             })}
//         </ul>

//         </div>
//     </div>

// )

       







// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// function GridExample() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }



        