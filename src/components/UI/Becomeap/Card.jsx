import Image from "next/image";
const Card = ({ images = [], title, description }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg sm:rounded-2xl lg:rounded-[1cm] p-6
                 sm:h-72 w-full h-auto 2xl:h-60 md:h-72 mx-auto sm:mx-0 
                 flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6"
    >
      {/* Images container - centered on mobile, left side on larger screens */}
      <div className="w-full sm:w-1/3 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-2">
        {images.map((url, index) => (
          <div
            key={index}
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"
          >
            <Image
              src={url}
              alt={`logo-${index}`}
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      {/* Content container */}
      <div className="w-full sm:w-2/3 text-center sm:text-left flex justify-center items-center flex-col">
        <h3 className="text-lg sm:text-xl text-black font-bold">{title}</h3>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Card;