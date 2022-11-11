import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import ApartmentModal from '../../Components/ApartmentModal/ApartmentModal';
import HouseModal from '../../Components/HouseModal/HouseModal.jsx'
import PropertyModal from '../../Components/PropertyModal/PropertyModal';
import {Form, Alert} from 'react-bootstrap'
import './Dashboard.css'
import {api, endpoints} from '../../Lib/Api'
import { getHeaderStructure } from '../../Lib/helper'
import {useSelector} from 'react-redux'

const Dashboard = () =>{
    const [open, setOpen] = useState(false);
    const [houseOpen, setHouseOpen] = useState(false);
    const [propertyOpen,setPropertyOpen] = useState(false);
    const [cityInput, setCityInput] = useState(false);
    const [districtInput, setDistrictInput] = useState(false);
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [msg,setMsg] = useState('');
    const [variant, setVariant] = useState('');
    const token = useSelector((state)=>state.auth.data.token);
    const config = {
        headers: getHeaderStructure(token),
    }
  
    const handleCitySubmit = async (e) =>{
        e.preventDefault();
        console.log(city);
        const editConfig = {...config};
        editConfig.data = {city};
        const result = await api.call(endpoints.addCity,editConfig);
        console.log(result);
        if(result.success){
            setMsg('City has been successfully added.')
            setVariant('success');
            setTimeout(()=>{
                setVariant('');
                setMsg('');
                setCityInput(false);

            },3000)

        }else{
            setMsg('Something went wrong when adding city.');
            setVariant('danger');
            setTimeout(()=>{
                setVariant('');
                setMsg('');
            },3000)
        }
        
    }
      
    const handleDistrictSubmit = async (e) =>{
        e.preventDefault();
        console.log(district);
        const editConfig = {...config};
        editConfig.data = {district};
        const result = await api.call(endpoints.addDistrict,editConfig);
        console.log(result);
        if(result.success){
            setMsg('District has been successfully added.')
            setVariant('success');
            setTimeout(()=>{
                setVariant('');
                setMsg('');
                setDistrictInput(false);

            },3000)

        }else{
            setMsg('Something went wrong when adding district.');
            setVariant('danger');
            setTimeout(()=>{
                setVariant('');
                setMsg('');
            },3000)
        }
        
    }
    return <>
    <div className="btns-container">
       
    <Button variant="primary" onClick={()=>setOpen(!open)}>
        Add a new apartment.
    </Button>
    <ApartmentModal show={open}
    onHide={()=>setOpen(false)}/>
    <Button variant="primary" onClick={()=>setHouseOpen(!houseOpen)}>
        Add a new house.
    </Button>
    <HouseModal show={houseOpen} 
    onHide={()=>setHouseOpen(false)} />
    <Button variant="primary" onClick={()=>setPropertyOpen(!propertyOpen)}>
        Add a new property
    </Button>
    <PropertyModal show={propertyOpen}
    onHide={()=>setPropertyOpen(false)} />



    </div>
    <div className="query-btns">
        <div>

        <Button variant="secondary"
        onClick={()=>{setCityInput(!city)}}>Add a city</Button>
        {cityInput &&(
            <>
            {msg ? (<>
            {variant &&<Alert variant={variant}t>{msg}</Alert>}

            </>):(
                <>

            <Form onSubmit={handleCitySubmit}>
            <Form.Group className="mb-3">
                <Form.Label>
                    Shto qytet:
                </Form.Label>
                <input 
                type="text"
                required
                className="form-control"
                value={city}
                onChange={(e)=>{
                    setCity(e.target.value)
                    
                }}
                placeholder="Qyteti"
                />
            </Form.Group>
            <Button variant='primary'type="submit">Shto</Button>

            </Form>
                
                </>
            )}
            </>
        )}
        </div>

        <div>

<Button variant="secondary"
onClick={()=>{setDistrictInput(!district)}}>Add a district</Button>
{districtInput &&(
    <>
    {msg ? (<>
    {variant &&<Alert variant={variant}>{msg}</Alert>}

    </>):(
        <>

    <Form onSubmit={handleDistrictSubmit}>
    <Form.Group className="mb-3">
        <Form.Label>
            Shto lagje:
        </Form.Label>
        <input 
        type="text"
        required
        className="form-control"
        value={district}
        onChange={(e)=>{
            setDistrict(e.target.value)
            
        }}
        placeholder="Lagje"
        />
    </Form.Group>
    <Button variant='primary'type="submit">Shto</Button>

    </Form>
        
        </>
    )}
    </>
)}
</div>
    </div>
    </>
}
export default Dashboard;