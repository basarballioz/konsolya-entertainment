"use client";

import RentFromStore from "@/components/RentFromStore";
import Breadcrumb from "@/components/Common/Breadcrumb";

const rentStore = () => {
    return (
        <>
            <Breadcrumb
                pageName="Rent From Store"
                description="Rent a console from any store for a seamless gaming adventure. Choose from the latest consoles and games for a flexible, commitment-free experience."
            />
            <RentFromStore />
        </>
    );
};

export default rentStore;
