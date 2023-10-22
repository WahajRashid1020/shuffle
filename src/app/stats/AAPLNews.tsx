import Break from "@/components/ui/break";
import React from "react";

const AAPLNews = () => {
  return (
    <div className="my-4">
      <h1 className="text-2xl font-bold sm:text-3xl">AAPL News</h1>
      <Break />
      <div className="hover:bg-gray-950 items-center flex flex-row justify-between     p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around sm:w-2/3 space-y-3 items-start">
          <p className="sm:text-sm text-xs">Benzinga 5h</p>
          <p className="sm:text-base text-sm">
            Next In Line: iPhone 16 Pro&lsquo;s Potential Features Revealed
          </p>
          <p className="sm:text-sm text-xs text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img loading="lazy" src="/apple.png" alt="" />
        </div>
      </div>{" "}
      <div className="hover:bg-gray-950 flex flex-row items-center justify-between    p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around sm:w-2/3 space-y-3 items-start">
          <p className="sm:text-sm text-xs">Benzinga 5h</p>
          <p className="sm:text-base text-sm">
            Next In Line: iPhone 16 Pro&lsquo;s Potential Features Revealed
          </p>
          <p className="sm:text-sm text-xs text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img loading="lazy" src="/apple.png" alt="" />
        </div>
      </div>{" "}
      <div className="hover:bg-gray-950 items-center flex flex-row justify-between p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around sm:w-2/3  space-y-3 items-start">
          <p className="sm:text-sm text-xs">Benzinga 5h</p>
          <p className="sm:text-base text-sm">
            Next In Line: iPhone 16 Pro&lsquo;s Potential Features Revealed
          </p>
          <p className="sm:text-sm text-xs text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img loading="lazy" src="/apple.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AAPLNews;
