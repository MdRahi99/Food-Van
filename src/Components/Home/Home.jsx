import Banner from "./Banner";
import Popular from "./Popular";
import Recommended from "./Recommended";
import Loader from '../Shared/Loader';
import { useProducts } from '../../Hooks/useProducts';

const Home = () => {

    const {state} = useProducts();
    const {products, error, loading} = state;
    
    const filterPopularData = products.data?.filter(product => {
        return product.IsPopular === true
    });
    const filterRecommendedData = products.data?.filter(product => {
        return product.IsRecommended === true
    });
    
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <Banner />
            <div className='flex flex-col gap-12'>
                <Popular filterPopularData={filterPopularData} title='Popular' />
                <Recommended filterRecommendedData={filterRecommendedData} title='Recommended' />
            </div>
        </>
    );
};

export default Home;