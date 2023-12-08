
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../authProvider/AuthProvider";



const Register = () => {
    const {createUser} =useContext(AuthContext)
    const [errors, setErrors] = useState("");
    const [success, setSuccess] = useState("");
    const [show, setShow] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form=new FormData(e.currentTarget)
        const email=form.get("email")
        const password=form.get('password')
        const name=form.get('name')
        const photoUrl=form.get("photo")
        const checked=form.get('terms')
        console.log(name,email,password,photoUrl,checked)
        createUser(email,password)
        .then(Result=>{
            console.log(Result.user)
            setSuccess("Registered successfully")
        })
        .catch(error=>{
            console.log(error.message)
            setErrors(error.message)
        })

        setErrors("")
        setSuccess("")
        if (password.length < 6) {
            setErrors("password should be at least 6 characters  ")
            return
        }
        if (!/^(?=(.*[A-Z]){2})(?=.*\$)(?=(.*\d){3})[A-Za-z\d$]+$/.test(password)) {
            setErrors("your password should have at least 2 uppercase letters, 1 dollar sign ('$'), and 3 numbers")
            return;
        }
        if (!checked) {
            setErrors("please checked our terms and conditions")
            return
        }

        setErrors("")
        setSuccess("")



    }
    return (
        <div className="mt-5 ">
            <Navbar></Navbar>
            <div className="w-1/2 mx-auto mt-32">
                <h1 className="text-3xl text-red-400 font-bold text-center my-3">Please register your account</h1>
                <hr />

                <form className="space-y-4" onSubmit={handleSubmit} >
                <input className="py-2 pl-3 w-full border mt-7  " required placeholder="your name" type="text" name="name" id="" />
                <input className="py-2 pl-3 w-full border  " required placeholder="your photo url" type="text" name="photo" id="" />
                    <input className="py-2 pl-3 w-full border  " required placeholder="your email" type="email" name="email" id="" />
                    <br />
                    <div className="relative">
                        <input className="py-2 pl-3 w-full border  " required type={show ? "text" : "password"} placeholder="password" name="password" id="" />
                        < div onClick={() => setShow(!show)} className=" absolute right-3 top-2 text-2xl">{show ? <IoIosEye /> : <IoIosEyeOff />} </div>
                    </div>
                    <br />
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept our <a href=""> terms & conditions</a></label>

                    <input className="py-2 w-full border btn btn-success " type="submit" value="Register" />
                    <p className=" text-center">Already have an account <Link className="text-green-600 my-2 font-medium" to="/login">Login</Link></p>
                </form>
                {
                    errors && <p className="text-red-600">{errors}</p>
                }
                {
                    success && <p className=" text-green-700">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;