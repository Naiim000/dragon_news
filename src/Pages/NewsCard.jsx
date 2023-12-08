import { FaRegBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";

const NewsCard = ({ aNews }) => {
    return (
        <div className="border mb-4">
            <div className=" bg-slate-100 flex justify-between items-center p-4">
                <div className=" flex gap-5 items-center" >
                    <div>
                        <img className="w-12 rounded-full" src={aNews.author.img} alt="" />
                    </div>
                    <div>
                        <h4 className="text-normal font-medium">{aNews.author.name}</h4>
                        <h4 className="text-sm ">{aNews.author.published_date}</h4>
                    </div>
                </div>
                <div className=" flex justify-center gap-2">
                    <FaRegBookmark />
                    <IoShareSocial></IoShareSocial>
                </div>
            </div>
            <div className=" space-y-3 p-4">
                <h1 className="text-2xl font-bold">{aNews.title}</h1>
                <img className="" src={aNews.image_url} alt="" />
                {
                    aNews.details.length > 200 ? <p className="mb-5">{aNews.details.slice(0, 200)} <Link to={`/news/${aNews._id}`} className="text-lg font-medium text-amber-700">Read more</Link>  </p> : <p>{aNews.details}</p>
                }
                <hr />
            </div>
            <div className="flex justify-between items-center p-4">
                <div className="flex gap-2 items-center">
                <div className="rating rating-sm gap-2">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />

                </div>
                <p>{aNews.rating.number}</p>
                </div>
                <div className="flex gap-2 items-center">
                <IoEyeSharp />
                <p>{aNews.total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;