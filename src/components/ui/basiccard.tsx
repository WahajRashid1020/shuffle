"use client";
import { ArrowDown } from "lucide-react";
import React from "react";
import Break from "./break";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./dropdown-menu";
import { Input } from "./input";
import { Separator } from "./separator";

const Basiccard = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="bg-[#1e2124] border border-gray-500 rounded-bs p-4 flex flex-col justify-between items-center sm:w-80">
      <div className="flex flex-row items-center justify-between w-full text-white ">
        <h1>Name</h1>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-transparent">
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
                <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
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
        <h1 className="sm:text-base text-sm"> Invest In</h1>

        <div>
          <Input placeholder="Shares" />
        </div>
      </div>
      <Separator className="my-2 bg-transparent" />
      <div className="flex flex-row items-center justify-between w-full text-white">
        <h1 className="sm:text-base text-sm">Shares</h1>
        <div>
          <Input placeholder="0" />
        </div>
      </div>{" "}
      <Separator className="my-2 bg-transparent" />
      <div className="flex flex-row items-center justify-between w-full text-white">
        <h1 className="sm:text-base text-sm">Market Price</h1>
        <div>
          <h1 className="sm:text-base text-sm">
            <strong> $178.41</strong>
          </h1>
        </div>
      </div>{" "}
      <Separator className="my-2 bg-transparent" />
      <div className="flex flex-row items-center justify-between w-full text-white">
        <h1 className="sm:text-base text-sm">Commissions</h1>
        <div>
          <h1 className="sm:text-base text-sm">
            <strong> $0.00</strong>
          </h1>
        </div>
      </div>
      <Break />
      <div className="flex flex-row items-center justify-between w-full text-white">
        <h1 className="sm:text-base text-sm">Estimated Cost</h1>
        <div>
          <h1 className="sm:text-base text-sm">
            <strong> $13862</strong>
          </h1>
        </div>
      </div>
      <Separator className="my-2 bg-transparent" />
      <h1 className="text-sm ">
        <strong> How to buy Apple?</strong>
      </h1>
      <p className="text-xs sm:text-sm text-justify">
        Sign up for a Robinhood brokerage account to buy or sell Apple stock and
        options commission-free. Other fees may apply. See Robinhood
        Financial&lsquo;s fee schedule to learn more.
      </p>
      <Separator className="my-2 bg-transparent" />
      <Button className="w-full" variant="basic" size="bs">
        Signup to Buy
      </Button>
    </div>
  );
};

export default Basiccard;
