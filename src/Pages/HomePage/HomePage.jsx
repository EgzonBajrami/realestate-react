import './HomePage.css'
import SelectQuery from '../../Components/SelectQuery/SelectQuery'
import Apartment from '../../Components/Apartment/Apartment.jsx'
import PromotedHouse from '../../Components/PromotedHouse/PromotedHouse.jsx'
import {useEffect,useState} from 'react'
import {api, endpoints} from '../../Lib/Api'

import Carousel from 'react-bootstrap/Carousel';
import PromotedProperty from '../../Components/PromotedProperty/PromotedProperty'

const HomePage = () =>{
    const [apartmentData,setApartmentData] = useState([]);
    const [houseData,setHouseData] = useState([])

  
    useEffect(()=> {
        const getData = async () =>{
            const result = await api.call(endpoints.promotedApartment);
  
            setApartmentData(result.data);
            
        }
        const getHouse = async () =>{
            const result = await api.call(endpoints.promotedHouse);
            console.log(result);
            setHouseData(result.data);

        }
        getData();
        getHouse();

    },[])
    return<>
    <div className="with-bg">

    
    
    <Carousel className="carousel-containe">
      <Carousel.Item>
        <div   className="carousel-conta">

        <img
         
        
          src="https://imgur.com/nzWHqRe.jpg"
          alt="First slide"
        />
        </div>
        <Carousel.Caption className="carousel-capt">
          <h3>Shtepi ne shitje</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div    className="carousel-conta" >

        <img
        
          src="https://imgur.com/M9AUfPQ.jpg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className="carousel-capt">
          <h3>BANESA NE SHITJE DHE QERA!</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div    className="carousel-conta">

        <img
         
          src="https://imgur.com/6gwlPVo.jpg"
          alt="Third slide"
        />
        </div>

        <Carousel.Caption className="carousel-capt">
          <h3>Troje ne shitje</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <SelectQuery />
    <div className="container-div">

   {apartmentData.length>0 &&(

    <Apartment />
   )}
   {
    houseData.length>0 &&(
        <div className="promotedHouse">
        <PromotedHouse  />
        </div>
    )
   }
    </div>
    <div className="promotedHouse">

    <PromotedProperty />
    </div>
    </div>
    </>
}
export default HomePage;