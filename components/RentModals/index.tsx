import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import RentModalData from "./RentModalData";

const RentModals = () => {
  return (
    <section id="rentModals" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Different Options"
          paragraph="We offer you different business models. Thus, you can start your rental process by choosing the method that suits you best."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {RentModalData.map((item) => (
            <div key={item.id} className="w-full">
              <SingleBlog item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RentModals;
