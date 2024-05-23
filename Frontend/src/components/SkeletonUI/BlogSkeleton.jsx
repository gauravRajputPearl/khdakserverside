import React, { useState } from "react";

const BlogSkeleton = () => {
  const [blogData, setBlogData] = useState(Array(10).fill(""));

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-2 sm:my-5  px-2 text-gray-300 bg-gray-300">
        Blog - Latest Blogs & Articles on Call Girls and Escorts
      </h1>
      <div className="w-full flex px-5 sm:px-10 gap-10 flex-wrap">
        {Array.isArray(blogData) &&
          blogData.length > 0 &&
          blogData.map((data) => {
            return (
              <div class="mb-5 h-[500px] overflow-hidden relative max-w-sm bg-gradient-to-r from-amber-50 to-cyan-50 text-gray-700 border border-gray-200 rounded-lg shadow  w-[250px] sm:w-[300px] mx-auto">
                <div class="relative">
                  <a href="#" alt="">
                    <img
                      class="rounded-t-lg "
                      src=""
                      alt=""
                      className="max-h-[200px]   w-[300px] object-contain"
                    />
                  </a>
                  <img
                    src=""
                    width={100}
                    alt=""
                    className="absolute top-[50%] right-[50%]  opacity-50"
                    style={{ transform: "translate(50%,-50%)" }}
                  />
                </div>
                <div class="p-5 h-[200px] overflow-hidden ">
                  <a href="#">
                    <h2 class="mb-2 text-xl font-bold tracking-tight text-gray-300 bg-gray-300">
                      sjdfksjf
                    </h2>
                  </a>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}
                    class="mb-3 font-normal text-gray-700 h-22 overflow-hidden !line-clamp-6 "
                  ></p> */}
                  <p class="mb-3 font-normal text-gray-300 bg-gray-300 h-22 overflow-hidden !line-clamp-6 ">
                    sjfkjaklsdfjkaj
                  </p>
                </div>
                <div class=" h-10  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 mx-5 my-5 bg-gray-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Read more
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default BlogSkeleton;
