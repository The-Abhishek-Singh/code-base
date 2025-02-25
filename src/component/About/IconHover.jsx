import PropTypes from "prop-types";

function IconHover({ icon: Icon }) {
  return (
    <div className="w-auto h-auto group">
      <div className="relative w-[157px] h-[157px] rounded-full bg-neutral-900 transition-all duration-700 ease-in-out group-hover:bg-red-50">
        <div className="absolute w-[145px] rounded-full bg-neutral-800 h-[145px] transition-all duration-600 ease-in-out group-hover:bg-red-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-[133px] h-[133px] rounded-full bg-neutral-900 transition-all duration-500 ease-in-out group-hover:bg-red-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-[120px] h-[120px] rounded-full bg-neutral-800 transition-all duration-400 ease-in-out group-hover:bg-red-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-[103px] h-[103px] rounded-full bg-neutral-600 transition-all duration-300 ease-in-out group-hover:bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-[89px] h-[89px] rounded-full bg-neutral-700 shadow-lg transition-all duration-200 ease-in-out group-hover:bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute w-[60px] h-[60px] rounded-full flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Icon className="w-full h-full stroke-red-500 group-hover:stroke-white transition-all duration-300 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

IconHover.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default IconHover;