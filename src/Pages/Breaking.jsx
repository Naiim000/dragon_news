
import Marquee from 'react-fast-marquee';

const Breaking = () => {
    return (
        <div className='flex bg-slate-200'>
            <button className='text-white py-2 m-1 px-3 bg-pink-600 font-medium text-lg'>Latest</button>
            <Marquee pauseOnHover={true} speed={90} >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default Breaking;