import {useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {api, endpoints} from '../../Lib/Api'
import { getHeaderStructure } from '../../Lib/helper'

import {useSelector} from 'react-redux';
import {Form,Button} from 'react-bootstrap';
import './EditPropertyPage.css'
import ChangeImage from '../../Components/ChangeImage/ChangeImage';
const EditPropertyPage = () =>{
    const location = useLocation();
    const postId = location.pathname.split('/')[3];
    console.log(postId);

    const postData = location.state.postData;
    const token = useSelector((state)=>state.auth.data.token);
    
    const config = {
        headers: getHeaderStructure(token),
        params:[postId]
    }
    const navigate = useNavigate();
   


    console.log(postData);
    const [latitude,setLatitude] = useState(postData.latitude);
    const [longitute,setLongitute] = useState(postData.longitute);
    const [city, setCity] = useState(postData.city);
    const [description, setDescription] = useState(postData.description);
    const [district, setDistrict] = useState(postData.district);

    const [promoted,setPromoted] = useState(postData.promoted);

    const [price, setPrice] = useState(postData.price);
    const [status, setStatus] = useState(postData.status);
    const [title, setTitle] = useState(postData.title);

    const [yard, setYard] = useState(postData.yard);
    const [firstPage, setFirstPage] = useState(true);
    console.log(title);
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const editConfig = {...config};
        const data ={
            city,
            district,
           
            price,
            status,
            title,
            description,
            yard,
            promoted,
            latitude,
            longitute

        }
        editConfig.data = data;
        const result = await api.call(endpoints.editProperty,editConfig);
       console.log(editConfig);
        console.log(result);
        if(result.success){
            setFirstPage(false);

        }
        

    }
    const postType ="property";
    return <>
    <div className="move-top">
     {firstPage? ( 
    <div> 
   {postData &&(

<Form onSubmit={handleSubmit}>
<div className="container-div">


    <div className="location-div">
        
<Form.Group className="mb-3">
    <Form.Label>
        Titulli:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={title}
    onChange={(e)=>{
        setTitle(e.target.value)
    }}
    placeholder="Titulli"
    />
</Form.Group>
<Form.Group className="mb-3">
    <Form.Label>
        Cmimi:
    </Form.Label>
    <input 
    type="number"
    required
    className="form-control"
    value={price}
    onChange={(e)=>{
        setPrice(e.target.value)
    }}
    placeholder="Titulli"
    />
</Form.Group>


    </div>
    <div className="location-div">
    <Form.Group className="mb-3">
    <Form.Label>
        Pershkrimi:
    </Form.Label>
    <textarea 
    type="text"
    required
    className="form-control"
    value={description}
    onChange={(e)=>{
        setDescription(e.target.value)
    }}
    placeholder="Pershkrimi"
    />
</Form.Group>
<Form.Group className="mb-3">
    <Form.Label>
        Oborr:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={yard}
    onChange={(e)=>{
        setYard(e.target.value)
    }}
    placeholder="Oborri"
    />
</Form.Group>

        
        
    </div>


<div className="location-div">

<Form.Group className="mb-3">
    <Form.Label>
        Qyteti:
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
<Form.Group className="mb-3">
    <Form.Label>
        Lagjja:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={district}
    onChange={(e)=>{
        setDistrict(e.target.value)
    }}
    placeholder="Lagjja"
    />
</Form.Group>
</div>

<div className="location-div">
<Form.Group className="mb-3">
    <Form.Label>
        Statusi:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={status}
    onChange={(e)=>{
        setStatus(e.target.value)
    }}
    placeholder="Statusi"
    />
</Form.Group>
<Form.Group className="mb-3">
    <Form.Label>
        Promoted:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={promoted}
    onChange={(e)=>{
        setPromoted(e.target.value)
    }}
    placeholder="Promoted"
    />
</Form.Group>

</div>
<div className="location-div">
<Form.Group className="mb-3">
    <Form.Label>
        Latitude:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={latitude}
    onChange={(e)=>{
        setLatitude(e.target.value)
    }}
    placeholder="Statusi"
    />
</Form.Group>
<Form.Group className="mb-3">
    <Form.Label>
        Longitute:
    </Form.Label>
    <input 
    type="text"
    required
    className="form-control"
    value={longitute}
    onChange={(e)=>{
        setLongitute(e.target.value)
    }}
    placeholder="Promoted"
    />
</Form.Group>

</div>
</div>
<Button type="submit">
    Submit
</Button>


</Form>
        )}
        </div>
        ):(<>
        <ChangeImage postId={postId} postType={postType} imgs={postData.images}/>
        <Button onClick={()=>navigate(`/properties/${postId}`)}>
            Submit
        </Button>
        </> )}
        </div>
    </>
}
export default EditPropertyPage;