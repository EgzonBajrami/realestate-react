import {useEffect,useState} from 'react'
import {api, endpoints} from '../../Lib/Api'

import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import './PromotedHouse.css'




import Carousel from 'react-bootstrap/Carousel';


const PromotedHouse = () =>{

    const navigate = useNavigate();
  
    
 
    const [data,setApartmentData] = useState([]);
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.promotedHouse);
            console.log(result);
            setApartmentData(result.data);
            
        }
        getApartments();
    },[])
    console.log(data)


 
    return <>
   
   <div className="wrapper-heading" onClick={()=>navigate('/houses')}>

<div className="heading-container">
    <h3>Shtepi</h3>

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

        
     <div className="data-containerss" onClick={()=>{navigate(`/houses/${elem._id}`)}}  >
          <div className="status-container">
            <div className="status-cont">
              <button className="btn-status">{elem.status}</button>
              <div className="price-containerss">
                 <p>{elem.city},</p>
                 <p className="lagjja">{elem.district}</p>

             </div>
     

            </div>
       
           
            <div className="about-apartmentss">
            <p>{elem.description.substring(0,100)}</p>

             </div>

          </div>
         
             <div className="apartment-divsss">
                 <div className="divs-apartmentss">
                     <FontAwesomeIcon size="lg" icon={faBed} /> 
                     <h6>Dhoma gjumi: {elem.rooms} </h6></div>
                 <div className="divs-apartmentss">
                    <div className="icons-container"> 
                       <FontAwesomeIcon size="lg" icon={faBath} />
                      </div>
                     <h6>Banjo:{elem.bathroom} </h6></div>
                     <div className="divs-apartmentss">
                     <div className="icons-container"> 
                       <FontAwesomeIcon size="lg" icon={faUpDownLeftRight} />
                      </div>
                     <h6>Ari: {elem.bathroom} </h6></div>
                     <div className="divs-apartmentss">
                     <FontAwesomeIcon size="lg" icon={faSackDollar} />
                    <h6>Cmimi: {elem.price} </h6></div>

              

             </div>

         </div>


     </div>
    ))}
     </div>
    
    </>
}

export default PromotedHouse;