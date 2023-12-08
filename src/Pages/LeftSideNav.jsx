import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Category</h2>
            {
                categories.map(category=><NavLink className="block my-2 py-2 text-center hover:bg-slate-400" 
                style={({isActive})=>{
                    return{
                        color:isActive?"red":""
                    }

                }}
                to={`/category/${category.id}`}
                key={category.id}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;