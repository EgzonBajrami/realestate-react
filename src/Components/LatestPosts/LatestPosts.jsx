
import {api,endpoints} from '../../Lib/Api'

import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './LatestPosts.css'
const LatestPosts = () =>{
    const [apartmentData,setApartmentData] = useState([]);
    const [houseData, setHouseData] = useState([]);
    const [propertyData,setPropertyData] = useState([]);
    const navigate = useNavigate();

  
    useEffect(()=>{
        const getApartmentData = async() =>{
            const result = await api.call(endpoints.getLatestApartment);
            console.log(result);
            setApartmentData(result.data);

        }
        const getHouseData = async() =>{
            const result = await api.call(endpoints.getLatestHouse);
            console.log(result);
            setHouseData(result.data);

        }
        const getPropertyData = async()=>{
            const result = await api.call(endpoints.getLatestProperty);
            console.log(result);
            setPropertyData(result.data);

        }
        getApartmentData();
        getHouseData();
        getPropertyData();

    },[])
    console.log(apartmentData);
    return <>
    <div className="container-latests">
        <h6>Postimet e fundit:</h6>
        <div className="wrapper-latest">

       
       
        {apartmentData&&apartmentData.map((elem)=>(

        <div className="apartment-latests" onClick={()=>{navigate(`/apartments/${elem._id}`)}}>
            <div className="apartment-title">
                {elem.title}

            </div>
            <div className="apartment-image-latests">
            <img
          className="image-latests"
          src={process.env.REACT_APP_API_URL + elem.images[0]}
          alt="First slide"
        />


                </div>

        </div>
        ))}
        {houseData&&houseData.map((elem)=>(

<div className="apartment-latests" onClick={()=>{navigate(`/houses/${elem._id}`)}}>
    <div className="apartment-title">
        {elem.title}

    </div>
    <div className="apartment-image-latests">
    <img
  className="image-latests"
  src={process.env.REACT_APP_API_URL + elem.images[0]}
  alt="First slide"
/>


        </div>

</div>
))}
       {propertyData&&propertyData.map((elem)=>(

<div className="apartment-latests" onClick={()=>{navigate(`/properties/${elem._id}`)}}>
    <div className="apartment-title">
        {elem.title}

    </div>
    <div className="apartment-image-latests">
    <img
  className="image-latests"
  src={process.env.REACT_APP_API_URL + elem.images[0]}
  alt="First slide"
/>


        </div>

</div>
))}

    </div>
    </div>
    </>
}
export default LatestPosts;