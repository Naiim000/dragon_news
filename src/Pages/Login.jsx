
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../authProvider/AuthProvider';



const Login = () => {
    const location=useLocation();
    const nevigate=useNavigate();
const {signIn}=useContext(AuthContext);
    const [show,setShow]=useState(false)
    const handleLogin=(e)=>{
        e.preventDefault();
     const form=new FormData(e.currentTarget);
     const email=form.get("email");
     const password=form.get("password")
     console.log(email,password)
     signIn(email,password)
     .then(result=>{
        console.log(result.user);

        nevigate(location?.state?location.state:"/")
     })
     .catch(error=>{
        console.log(error)
     })

    }
    return (
        <div className=' mt-6'>
            <Navbar> </Navbar>

            <div className="w-1/2 mx-auto mt-32">
                <h2 className='text-3xl font-bold text-green-700 text-center mb-8'>Please  login here</h2>
                <hr />
           <form className=' space-y-4' onSubmit={handleLogin} >
            
                <input className="py-2 pl-3 w-full border mt-8  " required placeholder="your email"  type="email" name="email" id="" />
                <br />
               <div className="relative">
               <input className="py-2 pl-3 w-full border  " required type={ show? "text":"password"} placeholder="password" name="password" id="" />
                < div onClick={()=>setShow(!show)} className=" absolute right-3 top-2 text-2xl">{ show?<IoIosEye />:<IoIosEyeOff/>} </div>
               </div>
                <br />
               
                <input className="py-2 w-full border btn btn-accent " type="submit" value="Login" />
                <p className="text-center"> New here  <Link className=' text-blue-600 font-medium' to="/register">Register</Link></p>
            </form>
            </div>
            
        </div>
    );
};

export default Login;