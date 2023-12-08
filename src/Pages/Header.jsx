import moment from 'moment/moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center mt-4'>
         <img className='mx-auto' src={logo} alt="" />  
         <p>Journalism Without Fear or Favour</p>
         <h1 className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h1>
        </div>
    );
};

export default Header;