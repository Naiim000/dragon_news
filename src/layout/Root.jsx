
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=' font-display max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;