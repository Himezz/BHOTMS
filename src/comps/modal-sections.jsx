import React from "react";

const Modalsections = ({
  imageurl,
  text1,
  text2,
  text3,
  shouldRenderBorder,
  width,
  height,
}) => {
  return (
    <div
      className={`border-gray-400 text-center flex flex-col space-y-8 p-3 flex-1 ${
        shouldRenderBorder ? "border-r-1" : ""
      }`}
    >
      <div className=" justify-center   flex  w-[full] ">
        <div
          className="h-[90px] w-[100px]"
          style={{ width: width, height: height }}
        >
          <div
            style={{
              backgroundImage: `url(${imageurl})`,
              backgroundSize: "contain",
              backgroundPosition: "center center",
            }}
            className="w-full h-full "
          ></div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
          <p className="text-xl tracking-widest w-full modal-font-header">
            {text1}
          </p>
          <p className="text-sm">{text2}</p>
        </div>
        <button className="color-lol  border-2 mx-6 py-2 font-extrabold text-xs duration-500 custom-button hover:text-white">
          {text3} <div className="fill"></div>
        </button>
      </div>
    </div>
  );
};

export default Modalsections;
