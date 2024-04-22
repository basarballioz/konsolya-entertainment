import Breadcrumb from "@/components/Common/Breadcrumb";

const StoreDetails = ({ params }) => {

    console.log(params)

    return (
        <>
            <Breadcrumb
                pageName="Store Details"
                description="Store Details of Store"
            />
        </>
    );
};

export default StoreDetails;
