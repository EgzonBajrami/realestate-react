import {useEffect,useState,useMemo} from 'react'
import {api, endpoints} from '../../Lib/Api'

import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import './SingleLokalePage.css'
import {useLocation} from 'react-router-dom'




import Carousel from 'react-bootstrap/Carousel';
import Contact from '../../Components/Contact/Contact';
import GoogleMapsCall from '../../Components/GoogleMapsCall/GoogleMapsCall';

const SingleLokalePage = () =>{

    const location = useLocation();

 
    const auth = useSelector((state)=>state.auth.data)
 
    console.log(auth);
    const postId = location.pathname.split('/')[2]
    console.log(postId);

    const config =useMemo(()=>{
      return  {
           
            params:[postId]
        }
      
    },[postId]) 
      
    const navigate = useNavigate();
    const [elem,setApartmentData] = useState();
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.getSingleLokale,config);
            setApartmentData(result.data);
            
        }
        getApartments();
    },[config])
    console.log(elem)


 
    return <>
   
    {elem && (
        <div className="wrapper-apartment">

     
         <div className="apartment-containerss" key={elem._id}>
          <div className="go-to-edit"> 
          {(auth!==null)&&auth.role==='ADMIN'&&(<button onClick={()=>{navigate(`/lokale/edit/${postId}`,{state:{postData:elem}})}}>Edit</button>)}

          </div>
         <div className="title-containerss">
             <h3>{elem.title} - {elem.status}</h3>
         </div>
       

   
         
 
     <div className="carousel-containers">

<Carousel variant="dark">
      <Carousel.Item>
        <img
          className="carousel-cont"
          src={process.env.REACT_APP_API_URL + elem.images[0]}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-cont"
          src={process.env.REACT_APP_API_URL + elem.images[1]}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-cont"
          src={process.env.REACT_APP_API_URL + elem.images[2]}
          alt="Third slide"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-cont"
          src={process.env.REACT_APP_API_URL + elem.images[3]}
          alt="Fourth slide"
        />

      </Carousel.Item>
    </Carousel>
       
     </div>

         <div className="data-containerss"  >
          <div className="status-container">
            <div className="status-cont">
              <button className="btn-status">{elem.status}</button>
              <div className="price-containerss">
                 <p>Qyteti: {elem.city}</p>
                 <p className="lagjja">Lagjja:  {elem.district}</p>
       

             </div>
        
     

            </div>
         
            <div className="about-apartmentss">
                 <p>{elem.description}</p>

             </div>

          </div>
         
             <div className="apartment-divsss">
                 <div className="divs-apartmentss">
                     <FontAwesomeIcon size="lg" icon={faBed} /> 
                     <h6>Dhoma pune: {elem.rooms} </h6></div>
                 <div className="divs-apartmentss">
                    <div className="icons-container"> 
                       <FontAwesomeIcon size="lg" icon={faBath} />
                      </div>
                     <h6>Banjo:{elem.toilet} </h6></div>
                     <div className="divs-apartmentss">
                     <FontAwesomeIcon size="lg" icon={faSackDollar} />
                    <h6>Cmimi: {elem.price} </h6></div>

              

             </div>

         </div>
         <GoogleMapsCall getLatitude={elem}/>

     </div>
     <div className="contact-wrapper">

     <Contact />
     </div>
    
     </div>
    )}
    </>
}

export default SingleLokalePage;