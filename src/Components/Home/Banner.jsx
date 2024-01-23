import img from '../../Assets/Image1.png';

const Banner = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-between lg:bg-amber-500 lg:p-20 p-2 rounded-3xl gap-12 lg:gap-0 lg:relative my-16 lg:my-24'>
                <div className='flex flex-col text-center lg:text-left gap-6 p-3 lg:gap-10 w-full lg:w-1/2'>
                    <h1 className='text-3xl lg:text-5xl lg:text-white font-bold lg:font-semibold opacity-90'>Deliver Food to Your Door Step!</h1>
                    <p className='text-lg lg:text-2xl text-gray-400 font-semibold lg:text-gray-100 lg:opacity-80'>Authentic Food,Quick Service,Fast Delivery</p>
                </div>
                <div className='bg-orange-400 mt-12 lg:mt-0 h-72 lg:h-56 opacity-90 rounded-3xl lg:bg-transparent'>
                    <img className='lg:absolute relative lg:bottom-0 bottom-24 lg:right-10 h-96' src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;