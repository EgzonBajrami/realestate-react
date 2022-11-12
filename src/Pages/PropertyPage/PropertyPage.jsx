import {useEffect,useState} from 'react'
import {api, endpoints} from '../../Lib/Api'

import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import '../ApartmentsPage/ApartmentPage.css'
import LatestPosts from '../../Components/LatestPosts/LatestPosts';
import {useSelector} from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import Query from '../../Components/Query/Query';
import ReactPaginate from 'react-paginate';
const PropertyPage = () =>{


  const navigz = useSelector((state)=>state.query.data);

    const[navigateData,setNavigateData] = useState([navigz]);

    console.log(navigateData);
   
    

    
  const navigate = useNavigate();

  
 
    const [data,setApartmentData] = useState([]);
    useEffect(()=>{
        const getApartments = async ()=>{
            const result = await api.call(endpoints.getAllProperties);
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
    for(let i=0; i<data.length; i++){
      if(!navigateData[0][0] || navigateData[0]===null){
        changedData.push(data[i]);
      }

      if(data[i].city.includes(navigateData[0][0])){
        console.log(data[i]);
        changedData.push(data[i]);
      }
     
    }
    for(let i=0; i<changedData.length; i++){
      console.log(changedData[i].rooms)
      if(!navigateData[0][4]){
        changedData2.push(changedData[i]);
      }
      if(changedData[i].rooms>=parseInt(navigateData[0][4])){
        changedData2.push(changedData[i]);
      }
    }
    for(let i=0; i<changedData2.length; i++){
      if(!navigateData[0][5]){
        changedData3.push(changedData2[i]);
      }
      if(changedData2[i].rooms>=parseInt(navigateData[0][5])){
        changedData3.push(changedData2[i]);
      }

    }
    for(let i=0; i<changedData3.length;i++){
      if(!navigateData[0][1]){
        changedData4.push(changedData3[i]);
      }
      if(changedData3[i].district.includes(navigateData[0][1])){
        changedData4.push(changedData3[i]);
      }
    }
    for(let i=0; i<changedData4.length; i++){
      if(!navigateData[0][2]){
        changedData5.push(changedData4[i]);
      }
      if(changedData4[i].status.includes(navigateData[0][2])){
        changedData5.push(changedData4[i]);
      }
    }
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 4;
    const currentItems = changedData3.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(changedData3.length / 4);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 4) % changedData3.length;
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
<h3>Troje</h3>

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
    <div>
    
    <LatestPosts />
  </div>
    </div>
    </>
}

export default PropertyPage;