import {useEffect , useState} from "react";
import axios from "axios";
import {API_URL} from "../consts";
import { Link , useParams} from "react-router-dom";
import "../Index.css";
import "./Drink.css"
// import "bootstrap/dist/css/bootstrap.min"
import { Container , Row , Col, Card , Badge , Button, Placeholder } from "react-bootstrap";



// const NewDrinkCard = () => {
//   return (
//     <Card className="newDrinkCard">
//       <Card.Body>
//         <Card.Title>Add a New Drink</Card.Title>
//         <Link to="">
//           <Button variant="primary">Create</Button>
//           </Link>
//           </Card.Body>
//           </Card>
//   );
// }

const Drinkspage = ()=> {
    const [data , setData]= useState([]);
    // const [isLoading, setISLoading]= useState(true);

    useEffect (()=> {
        const fetchData = async()=> {
            const {data} = await axios.get(`${API_URL}/drinks`);
            setData(data);
            // setISLoading(false);
            console.log(data);
        };
        setTimeout(fetchData, 500); 
        // fetchData();
        }, []);
    










  return (

    <div className="page" >

     <h1>drinks page</h1>
       <div className="containerD" >
       
       <Row xs={1} md={3} className="g-4">
      {data.map((element)=> {
        return (
        <Col className="Drinkcol">
       
       
          <Card className="Drinkcontain">
            <Card.Img className="drink-image" variant="top" src={element.image} />
            <Card.Body className="drink-text">
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>
              <Link to={`/drinks/${element._id}`}>

                <Button className="drinkButtonDrink">Click!</Button>
                
              </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          
          </Col>)
      })}
      <Placeholder xs={6} />
       </Row>
           </div>
      </div>
      
    
  );

































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

        };

        export default Drinkspage;







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



        