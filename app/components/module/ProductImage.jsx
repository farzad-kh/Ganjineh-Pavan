import Image from "next/image";
import React from "react";
import { PictureOutlined } from "@ant-design/icons";
const ProductImage = ({ selectedImage}) => {
  return (
    <div className="flex max-sm:flex-[1] flex-[0.7] flex-col gap-4  max-w-full  max-md:justify-center justify-start max-md:items-center items-end max-sm:py-0 py-2 max-sm:px-0 px-5 relative top-1">
      <div className="max-w-72 h-auto min-h-[20rem] w-full aspect-square ">
        {/* {selectedImage} */}

        {selectedImage ? (
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src={`/${selectedImage}.jpg`}
            alt="Selected Category"
            className="w-full h-full object-cover rounded-md   "
          />
        ) : (
          <div className="w-full h-full justify-center flex items-center bg-gray-200 rounded-md  ">
            <PictureOutlined className=" text-slate-400 text-8xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
