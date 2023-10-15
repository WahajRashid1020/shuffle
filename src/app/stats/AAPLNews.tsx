import Break from "@/components/ui/break";
import React from "react";

const AAPLNews = () => {
  return (
    <div>
      <h1 className="text-3xl">AAPL News</h1>
      <Break />
      <div className="hover:bg-[#1e2124] flex flex-row justify-between p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around  space-y-3 items-start">
          <p className="text-sm">Benzinga 5h</p>
          <p className="text-base">
            Next In Line: iPhone 16 Pro's Potential Features Revealed
          </p>
          <p className="text-sm text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img src="/apple.png" alt="" />
        </div>
      </div>{" "}
      <div className="hover:bg-[#1e2124] flex flex-row justify-between p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around  space-y-3 items-start">
          <p className="text-sm">Benzinga 5h</p>
          <p className="text-base">
            Next In Line: iPhone 16 Pro's Potential Features Revealed
          </p>
          <p className="text-sm text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img src="/apple.png" alt="" />
        </div>
      </div>{" "}
      <div className="hover:bg-[#1e2124] flex flex-row justify-between p-4 rounded-md cursor-pointer my-2">
        <div className="flex flex-col justify-around  space-y-3 items-start">
          <p className="text-sm">Benzinga 5h</p>
          <p className="text-base">
            Next In Line: iPhone 16 Pro's Potential Features Revealed
          </p>
          <p className="text-sm text-gray-600">
            While the tech world is still taking in the features of the recently
            launched Apple Inc AAPL iPhone 15, whispers about the next model,
            the iPhone 16 Pro, have a
          </p>
        </div>
        <div className="sm:block hidden">
          <img src="/apple.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AAPLNews;
