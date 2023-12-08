import { useLoaderData } from "react-router-dom";
import Breaking from "./Breaking";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {
    const news=useLoaderData();
    console.log(news)
    return (
        <div className="space-y-6"> 
            
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
        
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-3 mt-7">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" md:col-span-2">
                    {
                        news.map(aNews=>
                          <NewsCard key={aNews._id} aNews={aNews}></NewsCard>  
                            )
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;