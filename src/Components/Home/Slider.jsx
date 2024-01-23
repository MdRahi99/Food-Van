import { useState } from 'react';
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import AddItemModal from './AddItemModal';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useProducts } from '../../Hooks/useProducts';

/* eslint-disable react/prop-types */
const Slider = ({ showPrevItems, showNextItems, canShowPrev, canShowNext }) => {
    const [showModal, setShowModal] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { addNewItem } = useProducts();

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const onSubmit = async (data) => {
        addNewItem(data);
        Swal.fire({
            icon: "success",
            title: "Item Added",
            showConfirmButton: false,
            timer: 1000
        });
        reset();
        closeModal()
    }

    return (
        <>
            <div className="flex items-center">
                <button className="text-lg font-medium text-orange-600 hover:text-orange-400 mr-2" onClick={openModal}>
                    Add More
                </button>
                <button
                    onClick={showPrevItems}
                    className={`${canShowPrev ? '' : 'opacity-50'}`}
                    disabled={!canShowPrev}
                >
                    <MdKeyboardArrowLeft className="text-4xl text-black opacity-80" />
                </button>
                <button
                    onClick={showNextItems}
                    className={`${canShowNext ? '' : 'opacity-50'}`}
                    disabled={!canShowNext}
                >
                    <MdKeyboardArrowRight className="text-4xl text-black opacity-80" />
                </button>
            </div>

            <AddItemModal
                showModal={showModal}
                closeModal={closeModal}
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors} />
        </>
    );
};

export default Slider;
