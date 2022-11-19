import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import {Form} from 'react-bootstrap'
import {useRef, useState} from 'react'
const ChangeImage = ({postId,postType,imgs}) =>{
    console.log(postId);
    
    const auth = useSelector((state)=>state.auth.data)
    const [image,setImage] = useState([process.env.REACT_APP_API_URL + imgs[0]]);
    const fileRef = useRef(null);
    const fileRef2 = useRef(null);
    const fileRef3 = useRef(null);
    const fileRef4 = useRef(null);
    const [image4,setImage4] = useState([process.env.REACT_APP_API_URL + imgs[1]]);
    const [image3,setImage3] = useState([process.env.REACT_APP_API_URL + imgs[2]])
    const [image2,setImage2] = useState([process.env.REACT_APP_API_URL + imgs[3]])
  
    console.log(postType)
    const [index, setIndex] = useState();


     const handleImageChange = async (e) =>{
         e.preventDefault();
  
        setImage(URL.createObjectURL(fileRef.current.files[0]))
        changeImage(fileRef.current.files[0])
       
     }
     const handleImageChange2 = (e) =>{
         e.preventDefault();
        
        setImage2(URL.createObjectURL(fileRef2.current.files[0]))
        changeImage(fileRef2.current.files[0])
      
     }
     const handleImageChange3 = (e) =>{
         e.preventDefault();
       
        setImage3(URL.createObjectURL(fileRef3.current.files[0]))
        changeImage(fileRef3.current.files[0])
      
     }
     const handleImageChange4 = (e) =>{
         e.preventDefault();
   
        setImage4(URL.createObjectURL(fileRef4.current.files[0]))
        changeImage(fileRef4.current.files[0])
     
     }
     const changeImage = async (file) =>{
        if(postType==='apartment'){
        const formData = new FormData();
        formData.append('apartment-image', file);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
            params:[postId,index]
        }

        editConfig.data = formData;
    
            console.log('hey')

            try{
                const result = await api.call(endpoints.addImage,editConfig);
                console.log(result);
    
            }catch(err){
    
            }
        }

        //house call
        if(postType==='house'){
            const formData = new FormData();
            formData.append('house-image', file);
            const editConfig = {
                headers:getHeaderStructure(auth.token),
                params:[postId,index]
            }
    
            editConfig.data = formData;
        
                console.log('hey')
    
                try{
                    const result = await api.call(endpoints.addHouseImage,editConfig);
                    console.log(result);
        
                }catch(err){
        
                }
            

        }
        //property call
        if(postType==='property'){
            const formData = new FormData();
            formData.append('property-image', file);
            const editConfig = {
                headers:getHeaderStructure(auth.token),
                params:[postId,index]
            }
    
            editConfig.data = formData;
        
                console.log('hey')
    
                try{
                    const result = await api.call(endpoints.addPropertyImage,editConfig);
                    console.log(result);
        
                }catch(err){
        
                }
            

        }
        if(postType==='lokal'){
            const formData = new FormData();
            formData.append('lokale-image', file);
            const editConfig = {
                headers:getHeaderStructure(auth.token),
                params:[postId,index]
            }
    
            editConfig.data = formData;
        
                console.log('hey')
    
                try{
                    const result = await api.call(endpoints.addLokalImage,editConfig);
                    console.log(result);
        
                }catch(err){
        
                }

        }
        
     }
    return <>
        <Form>
          <div className="container-div">
           
           <div className="location-div">
          
           <img  className="images-containers" src={image} alt="img-0" />
      
       <input ref={fileRef} type="file" onClick={()=>setIndex('0')} onChange={handleImageChange} name="apartment-image" accept="image/png, image/jpeg" />
     </div>
     <div className="location-div">
     <img  className="images-containers" src={image2} alt="img-2" />

<input ref={fileRef2} type="file" onClick={()=>{setIndex('1')}} onChange={handleImageChange2} name="apartment-image" accept="image/png, image/jpeg" />


     </div>
     <div className="location-div">
     <img  className="images-containers" src={image3} alt="img-3"  />

<input ref={fileRef3} type="file" onClick={()=>{setIndex('2')}} onChange={handleImageChange3} name="apartment-image" accept="image/png, image/jpeg" />


     </div>
     <div className="location-div">
     <img  className="images-containers" src={image4} alt="img-4"  />

<input ref={fileRef4} type="file" onClick={()=>{setIndex('3')}} onChange={handleImageChange4} name="apartment-image" accept="image/png, image/jpeg" />


     </div>
     </div>

    </Form></>
}
export default ChangeImage;