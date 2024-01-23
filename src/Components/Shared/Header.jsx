import { MdPersonOutline } from '@react-icons/all-files/md/MdPersonOutline';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='flex w-full gap-4 items-center justify-between'>
                <Link to='/' className="w-1/6  ml-4 lg:ml-0">
                    <h1 className="font-comfortaa text-3xl font-extrabold">pti.</h1>
                </Link>
                <div className='w-5/6 mr-4 lg:mr-0 lg:w-4/6 flex gap-4 relative'>
                    <FiSearch className='absolute left-2 top-1/3 text-orange-400 text-lg' />
                    <input type="text" placeholder="Search AudioBook" className="input w-4/6 lg:3/4 focus:outline-none border-0 shadow-md focus:shadow-md rounded-lg pl-9" />

                    <div className="dropdown dropdown-bottom dropdown-end focus:outline-none border-0 shadow-md focus:shadow-md rounded-lg font-bold w-2/6 lg:w-1/4">
                        <div tabIndex={0} className="p-2 flex items-center justify-between">
                            <h1 className='text-sm font-bold'>MENU</h1>
                            <MdKeyboardArrowDown className='text-3xl text-orange-400' />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-64 lg:w-full mt-4 text-gray-500 font-medium">
                            <li className='hover:text-orange-600'><Link to='/'>Home</Link></li>
                            <li className='hover:text-orange-600'><Link to='/details'>Details</Link></li>
                            <li className='hover:text-orange-600'><Link to='/category'>Category</Link></li>
                            <li className='hover:text-orange-600'><Link to='/favorites'>My Favorites</Link></li>
                            <li className='hover:text-orange-600'><Link to='/profile'>Profile</Link></li>
                            <li className='hover:text-orange-600'><Link to='/register'>Login/Sign Up</Link></li>
                        </ul>
                    </div>
                </div>
                <Link to='/profile' className='hidden lg:flex items-center justify-center lg:w-1/6'>
                    <MdPersonOutline className='text-3xl text-white h-10 w-10 rounded-full p-1 bg-orange-600' />
                </Link>
            </div>
        </>
    );
};

export default Header;