import './SelectQuery.css'
import Form from 'react-bootstrap/Form'
import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button'
import {api, endpoints} from '../../Lib/Api'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {getQuery,removeQuery} from '../../Lib/store/slices/query'

const SelectQuery = () =>{
  const navigate = useNavigate();
    const [city,setCity] = useState();
    const [district,setDistrict] = useState();
    const [status,setStatus] = useState();
    const [type,setType] = useState();
    const[rooms,setRooms] = useState();
    const [bathrooms,setBathRooms] = useState();
    const [cityData, setCityData] = useState([]);
    const [districtData,setDistrictData] = useState([]);
    console.log(cityData);
    const dispatch = useDispatch();
  
    useEffect(()=>{
      const getAllCities = async () =>{
        const result = await api.call(endpoints.getCities);
        setCityData(result.data);

      }
      const getDistricts = async ()=>{
        const result = await api.call(endpoints.getDistricts);
        setDistrictData(result.data);
      }
      getAllCities();
      getDistricts();

    },[])
    console.log(districtData);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch(removeQuery())
        let navigateData = [city,district,status,type,rooms,bathrooms]
        
       
        
        
        if(navigateData[3]==='Apartment'){
          dispatch(getQuery(navigateData));
          navigate('/apartments', {state:{navigateData:navigateData}});
        }
        if(navigateData[3]==='Shtepi'){
          dispatch(getQuery(navigateData));
          navigate('/houses', {state:{navigateData:navigateData}})
        }
        if(navigateData[3]==='Prone'){
          dispatch(getQuery(navigateData));
          navigate('/properties', {state:{navigateData:navigateData}})
        }
        if(navigateData[3]==='Lokale'){
          dispatch(getQuery(navigateData));
          navigate('/lokale',{state:{navigateData:navigateData}} )
        }

       console.log(navigateData);
        
    }
    return (
        <>
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
            <div className="form-firstRow">
             

              <Form.Select
              value={city}
              onChange={(e)=>{setCity(e.target.value)}}
               className="option-rowOne"  aria-label="Default select example"
               >
                <option >Qyteti</option>
                {cityData && cityData.map((elem)=>(
                  <>
                  
                                  <option key={elem._id} onClick={(e)=>{setCity(e.target.value)}}
                                   value={elem.city}>{elem.city}</option>
                  </>
                ))}
   
              </Form.Select>
              <Form.Select
               value={district}
               
               onChange={(e)=>{setDistrict(e.target.value)}}
               className="option-rowOne"
                aria-label="Default select example">
                <option className="">Lagjja</option>
                {districtData && districtData.map((elem)=>(
                  <>
                  
                                  <option key={elem._id} onClick={(e)=>{setCity(e.target.value)}}
                                   value={elem.district}>{elem.district}</option>
                  </>
                ))}
              </Form.Select>
              <Form.Select 
              value={status}
              required
              onChange={(e)=>{setStatus(e.target.value)}}
              className="option-rowOne" aria-label="Default select example">
                <option className="">Statusi</option>
                <option value="Me qera">Me qera</option>
                <option value="Shitet">Pages</option>
              </Form.Select>
            </div>
            <div className="form-firstRow">

<Form.Select 
value={type}
required
onChange={(e)=>{setType(e.target.value)}}
className="option-rowOne"  aria-label="Default select example">
  <option >Lloji</option>
  <option value="Apartment">Banesa</option>
  <option value="Lokale">Lokale</option>
  <option value="Shtepi">Shtepi</option>
  <option value="Prone">Prone</option>

</Form.Select>
<Form.Select 
value={rooms}
required
onChange={(e)=>{setRooms(e.target.value)}}
className="option-rowOne" aria-label="Default select example">
  <option value="1" className="">Min Dhoma Gjumi</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</Form.Select>
<Form.Select
value={bathrooms}

onChange={(e)=>{setBathRooms(e.target.value)}}
 className="option-rowOne" aria-label="Default select example">
  <option  value="1" className="" selected>Min Banjo</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</Form.Select>
</div>
<div className="form-firstRow">

<Button className="kerko-btn" type="submit" value="Submit">Kerko</Button>
</div>
</Form>

        </div>
        </>
    )

}
export default SelectQuery;