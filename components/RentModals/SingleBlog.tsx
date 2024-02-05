import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ item }) => {
  const { title, image, paragraph } = item;
  return (
    <>
      <div
        className="relative overflow-hidden rounded-md bg-white shadow-one">
        <Link href="/" className="relative block h-[320px] w-full">
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold text-black hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color">
            {paragraph}
          </p>
        </div>
      </div >
    </>
  );
};

export default SingleBlog;
