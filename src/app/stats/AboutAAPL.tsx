"use client";
import { useState } from "react";
import Break from "@/components/ui/break";

const AboutAAPL: React.FC = () => {
  const longText =
    "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other varieties of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, AppleCare, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in April 1976 and is headquartered in Cupertino, CA. The listed name for AAPL is Apple Inc. Common Stock.";
  const wordLimit = 50;
  const words = longText.split(" ");

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const truncatedText = showMore
    ? longText
    : words.slice(0, wordLimit).join(" ");

  return (
    <>
      <div className="py-5">
        <h1 className="text-2xl font-bold sm:text-3xl pt-2">About AAPL</h1>
        <Break />
        <p className="sm:text-sm text-xs text-justify">
          {truncatedText}
          {words.length > wordLimit && (
            <button
              onClick={toggleShowMore}
              className=" sm:text-sm text-xs px-2 align-middle hover:text-cyan-300"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
        <div className="flex flex-col sm:flex-row justify-between sm:items-start my-4">
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>CEO</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Timothy Donald Cook</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Employees</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">164,000</p>
          </div>{" "}
          <div className="flex flex-row"></div>
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Headquarters</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Cupertino, California</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Founded</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">1976</p>
          </div>
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl pt-4">
          AAPL Key Statistics
        </h1>
        <Break />
        <div className="flex flex-col sm:flex-row justify-between sm:items-start my-4">
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>CEO</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Timothy Donald Cook</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Employees</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">164,000</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Headquarters</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Cupertino, California</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Founded</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">1976</p>
          </div>
        </div>{" "}
        <div className="flex flex-col sm:flex-row justify-between sm:items-start my-4">
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>CEO</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Timothy Donald Cook</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Employees</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">164,000</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Headquarters</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Cupertino, California</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Founded</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">1976</p>
          </div>
        </div>{" "}
        <div className="flex flex-col sm:flex-row justify-between sm:items-start my-4">
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>CEO</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Timothy Donald Cook</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Employees</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">164,000</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Headquarters</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">Cupertino, California</p>
          </div>{" "}
          <div className="flex flex-row sm:flex-col justify-between items-center sm:items-start space-y-2">
            <p className="sm:text-sm text-xs">
              <strong>Founded</strong>
            </p>{" "}
            <p className="sm:text-sm text-xs">1976</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAAPL;
