import React from "react";

const Modalsection2 = ({
  imageurl,
  text1,
  text2,
  text3,
  shouldRenderBorder,
  width,
  height,
  minWidth,
}) => {
  return (
    <div
      className={`border-gray-400 sm:text-sm flex flex-col space-y-5 my-4 flex-1 ${
        shouldRenderBorder ? "border-r-1" : ""
      }`}
    >
      <div className={"flex flex-row h-full"}>
        <div className="w-[110px] justify-center items-center flex ">
          <div
            className={" w-full    "}
            style={{ maxWidth: width, height: height, minWidth: minWidth }}
          >
            {" "}
            <div
              style={{
                color:"",
                backgroundImage: `url(${imageurl})`,
                backgroundSize: "contain",
                backgroundPosition: "center center",
              }}
              className=" h-full "
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[498px]">
          <p className="text-lol-size tracking-widest  modal-font-header">
            {text1}
          </p>
          <p className="text-lol-size2">{text2}</p>
        </div>
      </div>

      <button className="color-lol  border-2 mx-6 py-2 font-extrabold text-xs duration-500 custom-button hover:text-white">
        {text3} <div className="fill"></div>
      </button>
    </div>
  );
};

export default Modalsection2;
