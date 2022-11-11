import './Login.css';
import {Link,useNavigate} from 'react-router-dom'
import {useState} from 'react';
import {api, endpoints} from '../../Lib/Api'
import {login} from '../../Lib/store/slices/auth'
import {useDispatch} from 'react-redux';



const Login = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[email,setEmail] = useState();
    const [password,setPassword] = useState();



    const handleEmail = (e) =>{
        setEmail(e.target.value);

    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);

    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log('clicked')
        const data = [email,password];
        const config = {
            data
        }
        const result = await api.call(endpoints.login,config);
        console.log(result);
       if(result.success){ 
        dispatch(login(result.data));
        navigate('/')
    }
    }
    return(
        <>
        <div className="login">
            <div className="login-form"> 
            <h3>Welcome to E.B Real Estate</h3>
            <form onSubmit={handleSubmit} className="form-log">
                <label htmlFor="email">Email: </label>
                <input id="email" onChange={handleEmail} value={email} />
                <label htmlFor={"password"}>Password: </label>
                <input id="password" onChange={handlePassword} value={password} />

                <button type="submit" className="submit-btn"> Log In </button>
            

            </form>
            <div className="redirect-register">
                <p>Not signed up? <Link to='/register'>Click here to sign up.</Link></p>

            </div>
           
            </div>

        </div>
        </>
    )
}
export default Login;