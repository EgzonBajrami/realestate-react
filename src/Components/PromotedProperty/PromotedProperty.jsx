import {useEffect,useState} from 'react'
import {api, endpoints} from '../../Lib/Api'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import './PromotedProperty.css'




import Carousel from 'react-bootstrap/Carousel';


const PromotedProperty = () =>{

    const navigate = useNavigate();
  
    
 
    const [data,setApartmentData] = useState([]);
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.getPromotedProperty);
            setApartmentData(result.data);
            
        }
        getApartments();
    },[])
    console.log(data)


 
    return <>
<div className="wrapper-heading" onClick={()=>{navigate('/properties')}}>

<div className="heading-container">
<h3>Troje</h3>

</div>
</div>
    <div className="wrapper-columns">
    {data &&data.map((elem)=>(
         <div className="apartment-containers" key={elem._id}>
         <div className="title-containers">
             <h3>{elem.title}</h3>
         </div>
       

   
         
 
     <div className="carousel-container">

<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="carousel-conts"
          src={process.env.REACT_APP_API_URL + elem.images[0]}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-conts"
          src={process.env.REACT_APP_API_URL + elem.images[1]}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-conts"
          src={process.env.REACT_APP_API_URL + elem.images[2]}
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-conts"
          src={process.env.REACT_APP_API_URL + elem.images[3]}
          alt="Fourth slide"
        />

      </Carousel.Item>
    </Carousel>
       
     </div>

         <div className="data-containers" onClick={()=>{navigate(`/properties/${elem._id}`)}} >
             <div className="price-containers">
                 <p>Qyteti: {elem.city},Lagjja: {elem.district}</p>

             </div>
             <div className="about-apartments">
                 <p>{elem.description}</p>

             </div>
             <div className="apartment-divss">
                
                 <div className="divs-apartments">{elem.status}</div>
                 <div className="divs-apartments">
                     <FontAwesomeIcon size="lg" icon={faSackDollar} />
                     {elem.price}</div>

             </div>

         </div>

     </div>
    ))}
    </div>
   
    </>
}

export default PromotedProperty;