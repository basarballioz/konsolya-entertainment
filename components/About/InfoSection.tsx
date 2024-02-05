import Image from "next/image";

const InfoSection = () => {

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            >
              <Image
                src="/images/png/gamepad.png"
                alt="Gamepad PNG"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Konsolya Entertainment
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Currently, lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Leading Platform For Renting Console
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, cosnsectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Easy Delivery Options
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
