"use client";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

const HeroSection = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between pt-6 -m-2">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto">
                    <a className="relative z-10 inline-block" href="#">
                      <img src="nightsable-assets/logos/logo.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center mr-12">
                      <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter">
                        <a href="#">Home</a>
                      </li>
                      <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter">
                        <a href="#">About us</a>
                      </li>
                      <li className="mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter">
                        <a href="#">Wallet</a>
                      </li>
                      <li className="text-white font-medium hover:text-opacity-90 tracking-tighter">
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-auto hidden lg:block">
                    <div className="inline-block">
                      <a
                        className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                        href="#"
                      >
                        Get in touch
                      </a>
                    </div>
                  </div>
                  <div className="w-auto lg:hidden">
                    <a className="relative z-10 inline-block" href="#">
                      <svg
                        className="navbar-burger text-green-500"
                        width={51}
                        height={51}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill="currentColor"
                        />
                        <path
                          d="M37 32H19M37 24H19"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative z-10 px-9 pt-8 h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img src="nightsable-assets/logos/logo.svg" alt="" />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a
                        className="navbar-burger inline-block text-white"
                        href="#"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full">
                  <ul>
                    <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                      <a href="#">Home</a>
                    </li>
                    <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                      <a href="#">About us</a>
                    </li>
                    <li className="mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter">
                      <a href="#">Wallet</a>
                    </li>
                    <li className="text-white font-medium hover:text-opacity-90 tracking-tighter">
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <a
                    className="inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="#"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className="relative pt-20 pb-24 lg:pb-40">
            <div className="relative z-10 container px-4 mx-auto">
              <div className="flex flex-wrap items-end -m-8">
                <div className="relative z-10 w-full md:w-1/2 lg:w-7/12 p-8">
                  <div className="md:max-w-xl">
                    <span className="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">
                      Nightsable Card
                    </span>
                    <h1 className="mb-8 text-7xl lg:text-8xl text-white tracking-tighter">
                      A Distilled Approach to Earnings Insights.
                    </h1>
                    <p className="mb-10 text-lg text-white md:max-w-xs">
                      Earnings reports can be dense, but your decisions
                      shouldn’t be. Get condensed insightful summaries of
                      earnings reports and more that strip away the noise.
                    </p>
                    <a
                      className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                      href="#"
                    >
                      Start now
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12 p-8">
                  <div className="relative max-w-max mx-auto md:mr-0">
                    <img src="/s1.png" alt="" />
                    <img
                      className="absolute -top-16 -left-16"
                      src="nightsable-assets/images/headers/star.svg"
                      alt=""
                    />
                    <img
                      className="absolute top-56 -left-44"
                      src="nightsable-assets/images/headers/star2.svg"
                      alt=""
                    />
                    <div className="absolute bottom-10 -right-40">
                      <img
                        className="relative -bottom-4"
                        src="nightsable-assets/images/headers/star5.svg"
                        alt=""
                      />
                      <img
                        src="nightsable-assets/images/headers/star3.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 left-0"
            src="nightsable-assets/images/headers/layer-blur.svg"
            alt=""
          />
          <img
            className="absolute top-24 right-0"
            src="nightsable-assets/images/headers/lines.svg"
            alt=""
          />
        </section>
        <section className="relative py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="relative z-10 md:max-w-md">
                  <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                    Nightsable Card
                  </span>
                  <h2 className="mb-6 text-7xl text-white tracking-tighter-xl">
                    Sample Reports
                  </h2>
                  <p className="mb-10 text-white text-opacity-60 md:max-w-xs">
                    Access our limited earnings reports of market leaders like
                    AAPL, AMZN, MSFT, and META.
                  </p>
                  <a
                    className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                    href="#"
                  >
                    Start now
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img className="md:mr-0 rounded-4xl" src="d1.png" alt="" />
              </div>
            </div>
          </div>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="nightsable-assets/images/features/bg-blur.png"
            alt=""
          />
        </section>
        <section className="py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="py-14 bg-gradient-radial-dark rounded-6xl">
              <div className="md:max-w-2xl mx-auto text-center px-4">
                <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                  Nightsable Card
                </span>
                <h2 className="mb-6 text-5xl text-white tracking-5xl">
                  Join the Wait List
                </h2>
                <p className="mb-12 text-gray-300 max-w-lg mx-auto">
                  Be among the first to gain access when we launch. Uncover
                  vital data, spot trends, and make informed decisions faster.
                </p>
                <a
                  className="inline-block px-14 py-4 font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                  href="#"
                >
                  Sign Up for Early Access
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between -m-8">
              <div className="w-auto p-8">
                <img src="nightsable-assets/logos/logo.svg" alt="" />
              </div>
              <div className="w-auto p-8">
                <ul className="flex flex-wrap -m-5">
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300"
                      href="#"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-8">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                  <select
                    className="appearance-none pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-50 outline-none bg-transparent"
                    typeof="text"
                    placeholder="Company"
                  >
                    <option>English</option>
                    <option>Poland</option>
                    <option>Norway</option>
                    <option>France</option>
                  </select>
                  <svg
                    className="absolute right-8 top-1/2 transform -translate-y-1/2"
                    width={16}
                    height={9}
                    viewBox="0 0 16 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6004 1.4585L9.16706 6.89183C8.52539 7.5335 7.47539 7.5335 6.83372 6.89183L1.40039 1.4585"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <link rel="stylesheet" href="css/tailwind/tailwind.min.css" />
          <script src="js/main.js"></script>
        </section>
      </>
    </>
  );
};
export default HeroSection;
