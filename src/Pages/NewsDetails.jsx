import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "./Header";
import RightSideNav from "./RightSideNav"


const NewsDetails = () => {
    const news = useLoaderData();
    const {id}=useParams()
    const aNews=news.find(aNews=>aNews._id===id)
    console.log(news)
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-4 gap-4">
                <div className=" col-span-3 space-y-10">
                    <h2 className="text-2xl font-bold">Dragon News</h2>
                    {
                        
                            <div key={id} className=" space-y-6">
                                <img className="w-full"  src={aNews.image_url} alt="" />
                                 
                                <p > {aNews.details}</p>
                            </div>
                        
    
                    }
                      <Link to="/"> <button className="py-2 px-4 bg-blue-600 rounded-md my-5"> All News</button></Link>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;