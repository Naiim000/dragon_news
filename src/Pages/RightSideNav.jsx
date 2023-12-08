import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qZone1 from "../assets/qZone1.png"
import qZone2 from "../assets/qZone2.png"
import qZone3 from "../assets/qZone3.png"
const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold mb-4" >Login with</h1>
                <button className="flex items-center justify-center gap-2 py-2 border w-full hover:bg-slate-200"><FcGoogle></FcGoogle> Login with google</button>
                <button className="flex hover:bg-slate-200 items-center justify-center gap-2 my-2 py-2 border w-full"><FaGithub></FaGithub> Login with github</button>
            </div>
            <div>
                <h1 className=" text-2xl font-bold my-4">Find us on</h1>
                <button className="flex items-center hover:bg-slate-200 justify-center gap-2 py-4 border w-full"> <FaFacebook></FaFacebook>Facebook</button>
                <button className="flex items-center hover:bg-slate-200 justify-center gap-2 py-4 border-x w-full"> <FaTwitter></FaTwitter>twitter</button>
                <button className="flex items-center hover:bg-slate-200 justify-center gap-2 py-4 border w-full"><FaInstagram></FaInstagram> Instagram</button>
            </div>
            <div>
            <h1 className="text-2xl font-bold my-4" >Q Zone</h1>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
            </div>

            
        </div>
    );
};

export default RightSideNav;