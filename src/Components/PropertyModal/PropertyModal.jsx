import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import {useState} from 'react';
import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import './PropertyModal.css'
import ChangeImage from '../ChangeImage/ChangeImage';




const PropertyModal =(props)=> {
    const auth = useSelector((state)=>state.auth.data)
     const[city,setCity] = useState();
     const[district,setDistrict] = useState();

     const [title,setTitle] = useState();
     const [price,setPrice] = useState();
     const [description,setDescription] = useState();
     const [yard,setYard] = useState();
     const [status,setStatus] = useState();
     const [promoted,setPromoted] = useState();

     const [firstPage,setFirstPage] = useState(true);
     const [latitude,setLatitude] = useState();
     const [longitute,setLongitute] = useState();
     const [postId,setPostId] = useState()
     const postType ="property"
     const [postData, setPostData] = useState();
     const config = {
        headers: getHeaderStructure(auth.token),
     }


     


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const editConfig = {...config};
        const data ={
            city,
            district,
           title,
            price,
            yard,
            status,
           
            description,
            promoted,
            latitude,
            longitute

        }
        editConfig.data = data;
        const result = await api.call(endpoints.createProperty,editConfig);
        if(result.success){
            setPostId(result.data._id);
            setPostData(result.data);

            setFirstPage(false);
        }
        console.log(result);
        

    }
   
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Shto apartment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {firstPage ? (

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
):(
    <ChangeImage postId={postId} postType={postType} imgs={postData} />
)}
      
       
      </Modal.Body>
      <Modal.Footer className='modal-footer'>

        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PropertyModal;