"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

import Basiccard from "@/components/ui/basiccard";
import AAPLNews from "./AAPLNews";
import AboutAAPL from "./AboutAAPL";
import DarkLineChart from "./LineChart";

const HeroSection = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="flex flex-col sm:flex-row  sm:justify-between items-start ">
          <div>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl sm:text-4xl">Apple</h1>
              <h1 className="text-3xl sm:text-4xl">$12309</h1>
              <h1 className="sm:text-xl text-base">
                <span className="text-org ">-$1.84 (-1.02%)</span> Today
              </h1>
              <h1 className="sm:text-xl text-base">
                <span className="text-org ">-$1.84 (-1.02%)</span> After hour
              </h1>
            </div>
            <div className="sm:mr-4">
              <DarkLineChart />
            </div>
            <div className=" flex bg-transparent flex-row items-start space-x-2 my-4">
              <Button variant="simple">1D</Button>
              <Button variant="simple">2D</Button>
              <Button variant="simple">3D</Button>
              <Button variant="simple">4D</Button>
            </div>
            <div className=" border bg-gray-950 rounded-lg border-gray-500 flex flex-row-reverse sm:flex-row justify-start items-center space-x-1 p-4 sm:mr-4">
              <div>
                <img className="w-3/4" src="/cardimg.svg" alt="Card" />
              </div>
              <div className="flex flex-col h-auto justify-between items-start">
                <div>
                  <h1 className="text-sm sm:text-base">Why Robinhood?</h1>
                  <p className="text-xs sm:text-sm">
                    Robinhood gives you the tools you need to put your money in
                    motion. You can buy or sell Apple and other ETFs, options,
                    and stocks.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="simple" className="text-org p-0">
                    Signup
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center my-4 md:hidden">
              <Basiccard />
              <Separator className="my-4 " />
              <div className="w-80">
                <Button size="bs" className="w-full" variant="basicr">
                  Signup to Buy
                </Button>{" "}
                <Separator className="my-4 " />
                <Button size="bs" className="w-full" variant="basicr">
                  Signup to Buy
                </Button>
              </div>
            </div>
            <AboutAAPL />
            <AAPLNews />
          </div>
          <div className="hidden md:block mt-11">
            <Basiccard />
            <Separator className="my-4 " />
            <div className="px-4">
              <Button size="bs" className="w-full" variant="basicr">
                Signup to Buy
              </Button>{" "}
              <Separator className="my-4 " />
              <Button size="bs" className="w-full" variant="basicr">
                Signup to Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
