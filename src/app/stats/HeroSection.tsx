"use client";
import React from "react";
import LineChart from "./LineChart";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Break from "@/components/ui/break";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import AboutAAPL from "./AboutAAPL";
import AAPLNews from "./AAPLNews";
import DarkLineChart from "./LineChart";
const data = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 55 },
  { name: "May", value: 50 },
  { name: "Jun", value: 60 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 65 },
  { name: "Sep", value: 75 },
  { name: "Oct", value: 80 },
  { name: "Nov", value: 90 },
  { name: "Dec", value: 85 },
];
const HeroSection = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <>
      <div className="container m-auto">
        <div className="flex flex-col sm:flex-row  sm:justify-between items-start ">
          <div>
            <div className="flex flex-col items-start">
              <h1 className="text-4xl">Apple</h1>
              <h1 className="text-4xl">$12309</h1>
              <h1>
                <span className="text-org">-$1.84 (-1.02%)</span> Today
              </h1>
              <h1>
                <span className="text-org">-$1.84 (-1.02%)</span> After hour
              </h1>
            </div>
            <div className="0 md:-ml-11 py-4 pr-4 w-full sm:w-auto">
              <DarkLineChart data={data} />
            </div>
            <div className="flex bg-transparent flex-row items-start space-x-2 my-4">
              <Button variant="simple">1D</Button>
              <Button variant="simple">2D</Button>
              <Button variant="simple">3D</Button>
              <Button variant="simple">4D</Button>
            </div>
            <div className=" border bg-gray-950 rounded-lg border-gray-500 flex flex-row-reverse sm:flex-row justify-start items-center space-x-1 p-4 mr-4">
              <div>
                <img className="w-3/4" src="/cardimg.svg" alt="Card" />
              </div>
              <div className="flex flex-col h-auto justify-between items-start">
                <div>
                  <h1>Why Robinhood?</h1>
                  <p>
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
            <AboutAAPL />
            <AAPLNews />
          </div>
          <div className="hidden bs:block mt-11">
            <div className="bg-[#1e2124] border border-gray-500 rounded-bs p-4 flex flex-col justify-between items-center w-80">
              <div className="flex flex-row items-center justify-between w-full text-white ">
                <h1>Name</h1>

                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>
                        <ArrowDown />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-20">
                      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        value={position}
                        onValueChange={setPosition}
                      >
                        <DropdownMenuRadioItem value="top">
                          Top
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">
                          Bottom
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">
                          Right
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <Break />
              <div className=" flex flex-row items-center justify-between w-full text-white">
                <h1 className="text-base"> Invest In</h1>

                <div>
                  <Input placeholder="Shares" />
                </div>
              </div>
              <Separator className="my-2 " />
              <div className="flex flex-row items-center justify-between w-full text-white">
                <h1 className="text-base">Shares</h1>
                <div>
                  <Input placeholder="0" />
                </div>
              </div>{" "}
              <Separator className="my-2 " />
              <div className="flex flex-row items-center justify-between w-full text-white">
                <h1 className="text-base">Market Price</h1>
                <div>
                  <h1 className="text-base">
                    <strong> $178.41</strong>
                  </h1>
                </div>
              </div>{" "}
              <Separator className="my-2 " />
              <div className="flex flex-row items-center justify-between w-full text-white">
                <h1 className="text-base">Commissions</h1>
                <div>
                  <h1 className="text-base">
                    <strong> $0.00</strong>
                  </h1>
                </div>
              </div>
              <Break />
              <div className="flex flex-row items-center justify-between w-full text-white">
                <h1 className="text-base">Estimated Cost</h1>
                <div>
                  <h1 className="text-base">
                    <strong> Name</strong>
                  </h1>
                </div>
              </div>
              <Separator className="my-2 " />
              <h1 className="text-sm">
                <strong> How to buy Apple?</strong>
              </h1>
              <p className="text-sm">
                Sign up for a Robinhood brokerage account to buy or sell Apple
                stock and options commission-free. Other fees may apply. See
                Robinhood Financial's fee schedule to learn more.
              </p>
              <Separator className="my-4 " />
              <Button className="w-full" variant="basic" size="bs">
                Signup to Buy
              </Button>
            </div>
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
