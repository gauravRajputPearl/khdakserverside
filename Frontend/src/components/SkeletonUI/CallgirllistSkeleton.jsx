import React from "react";

const CallgirllistSkeleton = () => {
  return (
    <div>
      <div>
        <div class="bg-gray-200 text-gray-700 w-full mb-10 grid grid-cols-[50%_auto] md:grid-cols-[20%_auto]  rounded-xl border border-spacing-2 border-gray-300 px-1 md:px-4 md:pb-2 py-2 text-left md:text-left">
          <div class="relative md:mb-0 h-[150px] w-[120px] md:h-[180px] md:w-[180px] mb-10  overflow-hidden">
            <div class="rounded-lg h-[150px] w-[120px] md:h-[180px] md:w-[180px] object-cover"></div>
            <div
              src=""
              width={100}
              className="absolute top-[50%] right-[50%]  opacity-50 bg-gray-600"
              style={{ transform: "translate(50%,-50%)" }}
            ></div>
          </div>
          <div class="flex flex-col justify-between ">
            <div>
              <h2 class="text-text-lg leading-4 sm:text-lg md:text-2xl font-medium text-gray-700 mb-2"></h2>
              <h3 class="text-xs md:text-sm line-clamp-5 md:line-clamp-4 font-medium text-gray-700">
                {/* {data?.description} */}
              </h3>
            </div>

            <div class=" grid grid-cols-2 gap-3 text-xs md:text-lg">
              <div
                href=""
                target="_blank"
                rel="noopener noreferrer"
                class="w-full rounded-lg border-2 bg-gray-300 px-2 py-1  md:px-4 md:py-2 font-medium text-gray-300 text-center"
              >
                Whats App
              </div>
              <div
                href=""
                class="w-full rounded-lg border-2 border-transparent bg-gray-300 px-2 py-1  md:px-4 md:py-2 font-medium text-gray-300 text-center"
              >
                Call Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallgirllistSkeleton;
