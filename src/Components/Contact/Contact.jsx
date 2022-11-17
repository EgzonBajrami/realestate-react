import {Form,Button} from 'react-bootstrap'
import './Contact.css'
const Contact = () =>{
    return <>
    <div className="wrapper-div">

    <div className="email-info">
        <div className="headers-info">
            <h3>Kontaktoni me email:</h3>

        </div>
        <Form>
            <Form.Group className="mb-3 email-input">
               
                <input type="email"
                required
                className="form-control"
                placeholder ="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
               
               <textarea type="string"
               required
               className="form-control"
               rows="15"
               placeholder ="Porosia" />
           </Form.Group>
           <Button>Dergo</Button>
        </Form>

        
        </div>
        <div className="normal-info">
            <div className="headers-info">
                <h3>Kontakti:</h3>

            </div>
            <p>Agjensioni per patundshmeri </p>
            <p className="to-bold">E.B Real Estate</p>
            <p>Tel: +383 049 678 698</p>
            <p>Email: ebpatundshmeri@gmail.com</p>
        </div>
    </div>
    
</>
}
export default Contact;