import AboutSection from "@/components/About/InfoSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

const InfoSection = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSection />
    </>
  );
};

export default InfoSection;
