import {useEffect,useState,useMemo} from 'react'
import {api, endpoints} from '../../Lib/Api'

import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import './ApartmentPage.css'


import Carousel from 'react-bootstrap/Carousel';

import ReactPaginate from 'react-paginate';
import LatestPosts from '../../Components/LatestPosts/LatestPosts';
import Query from '../../Components/Query/Query';
const ApartmentsPage = () =>{
  const navigz = useSelector((state)=>state.query.data);

    const[navigateData,setNavigateData] = useState([navigz]);

    console.log(navigateData);
   
    
    
  

    
    const navigate = useNavigate();

    
  
    const config =useMemo(()=>
    {
      return {

        params: [navigateData]
      }
  }
    ,[navigateData]) 
  console.log(config)
  
    const [data,setApartmentData] = useState([]);
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.getAllApartment,config);
            setApartmentData(result.data);
        }
        getApartments();
    },[config])
    const submit = async (data) =>{

      setNavigateData(data);

    }
    let changedData =[];
    let changedData2 = [];
    let changedData3 = [];
    let changedData4 =[];
    let changedData5=[];
    for(let i=0; i<data.length; i++){
      if(!navigateData[0]){
        changedData.push(data[i]);
      }

      if(data[i].city.includes(navigateData[0])){
        console.log(data[i]);
        changedData.push(data[i]);
      }
     
    }
    for(let i=0; i<changedData.length; i++){
      console.log(changedData[i].rooms)
      if(!navigateData[4]){
        changedData2.push(changedData[i]);
      }
      if(changedData[i].rooms>=parseInt(navigateData[4])){
        changedData2.push(changedData[i]);
      }
    }
    for(let i=0; i<changedData2.length; i++){
      if(!navigateData[5]){
        changedData3.push(changedData2[i]);
      }
      if(changedData2[i].rooms>=parseInt(navigateData[5])){
        changedData3.push(changedData2[i]);
      }

    }
    for(let i=0; i<changedData3.length;i++){
      if(!navigateData[1]){
        changedData4.push(changedData3[i]);
      }
      if(changedData3[i].district.includes(navigateData[1])){
        changedData4.push(changedData3[i]);
      }
    }
    for(let i=0; i<changedData4.length; i++){
      if(!navigateData[2]){
        changedData5.push(changedData4[i]);
      }
      if(changedData4[i].status.includes(navigateData[2])){
        changedData5.push(changedData4[i]);
      }
    }

    console.log(changedData);
    console.log(changedData2);
    console.log(changedData3);
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    const currentItems = changedData5.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(changedData5.length / 4);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % changedData5.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

  


 
    return <>
    <div className="with-bg">

    
    <div className="query-div">

    <Query submit={submit} />
    </div>
    <div className="pagination-container">

    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
    <div className="wrapper-heading">

    <div className="heading-container">
        <h3>Banesa</h3>

      </div>
    </div>

    <div className="wrapper-columns">
     
 
    
    {currentItems &&currentItems.map((elem)=>(
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

         <div className="data-containers" onClick={()=>{navigate(`/apartments/${elem._id}`)}} >
             <div className="price-containers">
                 <p>Qyteti: {elem.city},Lagjja: {elem.district}</p>

             </div>
             <div className="about-apartments">
                 <p>{elem.description}</p>

             </div>
             <div className="apartment-divss">
                 <div className="divs-apartments">
                     <FontAwesomeIcon size="lg" icon={faBed} /> 
                     {elem.rooms}</div>
                 <div className="divs-apartments">
                     <FontAwesomeIcon size="lg" icon={faBath} />
                     {elem.toilet}</div>
                 <div className="divs-apartments">{elem.status}</div>
                 <div className="divs-apartments">
                     <FontAwesomeIcon size="lg" icon={faSackDollar} />
                     {elem.price}</div>

             </div>

         </div>

     </div>
     
    ))}
    </div>
    <div>
    
      <LatestPosts />
    </div>
    </div>
    </>
}

export default ApartmentsPage;