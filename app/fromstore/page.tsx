"use client";

import RentFromStore from "@/components/rent-from-store";
import Breadcrumb from "@/components/Common/Breadcrumb";

const rentStore = () => {
    return (
        <>
            <Breadcrumb
                pageName="Rent From Store"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
            <RentFromStore />
        </>
    );
};

export default rentStore;
