import {useEffect,useState} from 'react'
import {api, endpoints} from '../../Lib/Api'

import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'

import '../ApartmentsPage/ApartmentPage.css'
import LatestPosts from '../../Components/LatestPosts/LatestPosts';


import Carousel from 'react-bootstrap/Carousel';
import { faUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

import ReactPaginate from 'react-paginate';
import Query from '../../Components/Query/Query';
const HousePage = () =>{

 



    const[navigateData,setNavigateData] = useState([]);

    console.log(navigateData);
   
    

    
  const navigate = useNavigate();

  
 
    const [data,setApartmentData] = useState([]);
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.getAllHouses);
            setApartmentData(result.data);
            console.log(result.data);
        }
        getApartments();
    },[])
    const submit = async (data) =>{

      setNavigateData(data);

    }
    
    let changedData =[];
    let changedData2 = [];
    let changedData3 = [];
    let changedData4 =[];
    let changedData5=[];
    if(data){

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
        console.log(navigateData[5])
        
        if(!navigateData[5]){
          changedData2.push(changedData[i]);
        }
        if(changedData[i].rooms>=parseInt(navigateData[5])){
          changedData2.push(changedData[i]);
        }
      }
      for(let i=0; i<changedData2.length; i++){
        if(!navigateData[6]){
          changedData3.push(changedData2[i]);
        }
        if(changedData2[i].rooms>=parseInt(navigateData[6])){
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
    }
    console.log(changedData);
    console.log(changedData2);
    console.log(changedData3);
    console.log(changedData4);
    console.log(changedData5);
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
    <h3>Shtepi</h3>

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
     <div>
    
    <LatestPosts />
  </div>
     </div>
    </>
}

export default HousePage;