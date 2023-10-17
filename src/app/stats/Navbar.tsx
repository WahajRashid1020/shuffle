import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf } from "lucide-react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="container m-auto">
      <nav className=" py-4 flex justify-between items-center">
        <Leaf />

        <div className="md:block hidden w-1/3    mx-4">
          <Input
            className="focus-visible:border-org"
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="flex flex-row items-end">
          <span className="sm:inline-flex  hidden">
            <Button variant="simple"> Learn</Button>
            <Button variant="simple"> Blog</Button>
            <Button variant="simple"> Careers</Button>
            <Button variant="simple"> Help</Button>
          </span>
          <Button variant="simple"> LogIn </Button>
          <Button variant="simple"> SignUp</Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
