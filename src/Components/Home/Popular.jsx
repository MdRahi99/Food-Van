import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Slider from "./Slider";
import Loader from "../Shared/Loader";

/* eslint-disable react/prop-types */
const Popular = ({ filterPopularData, title }) => {
    const itemsPerPageDesktop = 5;
    const itemsPerPageMobile = 3;

    const [startIndex, setStartIndex] = useState(0);

    const showNextItems = () => {
        setStartIndex((prevIndex) =>
            prevIndex + (window.innerWidth >= 768 ? itemsPerPageDesktop : itemsPerPageMobile)
        );
    };

    const showPrevItems = () => {
        setStartIndex((prevIndex) =>
            Math.max(0, prevIndex - (window.innerWidth >= 768 ? itemsPerPageDesktop : itemsPerPageMobile))
        );
    };

    if (!filterPopularData) {
        return <Loader />;
    }

    const canShowNext = filterPopularData.length > startIndex + (window.innerWidth >= 768 ? itemsPerPageDesktop : itemsPerPageMobile);
    const canShowPrev = startIndex > 0;

    return (
        <>
            <div className="p-4">
                <div className="flex gap-3 justify-between items-center mb-3">
                    <h1 className="text-lg font-medium">{title}</h1>

                    <Slider 
                        showPrevItems={showPrevItems} 
                        showNextItems={showNextItems} 
                        canShowPrev={canShowPrev} 
                        canShowNext={canShowNext}
                    />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                    {filterPopularData.slice(startIndex, startIndex + (window.innerWidth >= 768 ? itemsPerPageDesktop : itemsPerPageMobile)).map((items) => (
                        <ItemCard key={items?._id} items={items?.items} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Popular;
