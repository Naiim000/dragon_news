import { Link, NavLink } from "react-router-dom";
import userPhoto from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    console.log(user)
    const handleLogout=()=>{
        logOut()
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{

        console.error(error);})

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <small>{user?.email?user.email:""}</small>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL?user.photoURL:userPhoto} />
                        </div>
                        
                    </div>
                   
                   {
                    user? <Link to="/login"> <button onClick={handleLogout} className="py-1 px-4  bg-orange-300 text-lg rounded-md text-white">Logout</button></Link> :<Link to="/login"> <button className="py-1 px-4 bg-gray-900 text-lg rounded-md text-white">Login</button></Link>
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;