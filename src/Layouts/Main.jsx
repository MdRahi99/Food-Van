import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Header from "../Components/Shared/Header";

const Main = () => {
    return (
        <>
            <div className="w-full lg:w-10/12 mx-auto">
                <div className="my-6">
                    <Header />
                </div>
                <div className="divider lg:hidden"></div>
                <Outlet />
            </div>
            <div className="mt-6">
                <Footer />
            </div>
        </>
    );
};

export default Main;