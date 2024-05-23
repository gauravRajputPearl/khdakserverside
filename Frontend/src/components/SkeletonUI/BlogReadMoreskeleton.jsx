import React, { useState } from "react";

const BlogReadMoreskeleton = () => {
  const [blogData, setBlogData] = useState(Array(1).fill(""));
  return (
    <div>
      <>
        {Array.isArray(blogData) &&
          blogData.length > 0 &&
          blogData.map((data) => {
            return (
              <div className="space-y-2 mb-8 mx-2">
                <div className="border rounded-lg border-slate-300 p-3 mt-6 sm:mt-10 sm:mx-48 bg-gray-300 text-gray-700 text-center">
                  <h1 className="font-bold text-4xl text-gray-300 bg-gray-300">
                    slkdjfkajs
                  </h1>
                </div>
                <div className="border rounded-lg h-[2200px]  border-slate-300 p-6 bg-gray-200 text-gray-700 space-y-6 text-center flex flex-col sm:mx-48">
                  <div className="relative">
                    <img
                      src=""
                      alt=""
                      className="mx-auto rounded-lg sm:w-[800px] sm:h-[500px]"
                    />
                    <img
                      src=""
                      alt=""
                      className="absolute top-[50%] right-[50%]  opacity-50 w-[100px] md:w-[300px]"
                      style={{ transform: "translate(50%,-50%)" }}
                    />
                  </div>

                  {/* <div
              id="blogDescription"
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            ></div> */}
                  <div id="blogDescription "></div>
                </div>
              </div>
            );
          })}
      </>
    </div>
  );
};

export default BlogReadMoreskeleton;
