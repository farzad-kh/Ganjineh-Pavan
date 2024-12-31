"use client";
import React from "react";
import { Skeleton } from "antd";

const Loading = () => {
  return (
    <main className="mt-11 h-[80vh]">
      <div className="flex flex-col justify-center max-w-5xl m-auto">
        <section className="flex w-full justify-center  max-md:p-4 px-7 py-9 gap-4 flex-wrap max-md:flex-col flex-row-reverse">
          <div className="flex   flex-1 flex-col md:mr-10 py-2 px-5">
            <Skeleton />
          </div>

          <div className="flex max-sm:flex-[1] flex-[0.7] flex-col gap-4  max-w-full  max-md:justify-center justify-start max-md:items-center items-end max-sm:py-0 py-2 max-sm:px-0 px-5 relative top-1 ">
            <Skeleton.Image active={true} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
