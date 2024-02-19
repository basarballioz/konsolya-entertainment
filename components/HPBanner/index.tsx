import Link from "next/link";
import { FaGamepad } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const HPBanner = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-12 md:pt-[150px] md:pb-[80px] xl:pt-[180px] xl:pb-[140px] 2xl:pt-[210px] 2xl:pb-[180px]"
        style={{
          backgroundImage: `url('/images/banner/main-banner.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="mx-auto max-w-[800px] text-center"
              >
                <h1 className="mb-5 text-white text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-4xl md:leading-tight">
                  Welcome to Konsolya
                </h1>
                <p className="mb-12 text-white font-bold text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  New generation console rental platform. We bring you consoles without the need to purchase them.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    target="_blank"
                    className="flex items-center gap-x-1 rounded-md bg-primary py-5 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    <FaShoppingCart />
                    See Modals
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    className="flex text-white items-center gap-x-1 rounded-md bg-black/20 py-5 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30"
                  >
                    <FaGamepad />
                    Quick Rent!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section>
    </>
  );
};

export default HPBanner;
