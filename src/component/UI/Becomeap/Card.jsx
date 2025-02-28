import Image from "next/image";
const Card = ({ images = [], title, description }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg sm:rounded-2xl lg:rounded-[1cm] p-3 sm:p-4
                    w-full max-w-full sm:max-w-[90%] md:max-w-[95%] lg:max-w-[100%]
                    h-auto min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]
      mx-auto sm:mx-0 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-0"
    >
      {/* Images container - centered on mobile, left side on larger screens */}
      <div className="w-full sm:w-1/3 pb-3 sm:pb-0 sm:pr-4 flex justify-center sm:justify-start sm:flex-col sm:space-y-2">
        {images.map((url, index) => (
          <div key={index} className="relative w-16 h-16 sm:w-20 sm:h-20">
            <Image
              src={url}
              alt={`logo-${index}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      {/* Content container */}
      <div className="w-full sm:w-2/3 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl text-black font-bold">{title}</h3>
        <p className="text-gray-600 mt-2 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
};
export default Card;