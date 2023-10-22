import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <>
        <section className="relative overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between pt-6 -m-2">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto">
                    <a className="relative z-10 inline-block" href="#">
                      <img
                        loading="lazy"
                        className="max-h-16 max-w-16"
                        src="LOGO.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center">
                  <div className="w-auto hidden lg:block">
                    <ul className="flex items-center mr-12">
                      <li className="mr-12   font-medium hover:text-cyan-300   hover:underline tracking-tighter">
                        <a href="#">Home</a>
                      </li>
                      <li className="mr-12   font-medium  hover:text-cyan-300   hover:underline tracking-tighter">
                        <a href="#">About us</a>
                      </li>
                      <li className="mr-12   font-medium  hover:text-cyan-300   hover:underline tracking-tighter">
                        <a href="#">Wallet</a>
                      </li>
                      <li className="  font-medium  hover:text-cyan-300   hover:underline tracking-tighter">
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-auto hidden lg:block">
                    <div className="inline-block">
                      <a
                        className="inline-block px-8 py-4   hover:text-black tracking-tighter hover:bg-cyan-300 border-2 border-org focus:border-cyan-300 focus:border-opacity-40 hover:border-cyan-300 focus:ring-4 focus:ring-green-org focus:ring-opacity-40 rounded-full transition duration-300"
                        href="#"
                      >
                        Get in touch
                      </a>
                    </div>
                  </div>
                  <div className="w-auto lg:hidden">
                    <a className="relative z-10 inline-block" href="#">
                      <svg
                        className="navbar-burger  "
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
                        <img
                          loading="lazy"
                          className="max-h-16 max-w-16"
                          src="LOGO.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a className="navbar-burger inline-block  " href="#">
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
                    <li className="mb-8   font-medium hover:text-cyan-300 tracking-tighter">
                      <a href="#">Home</a>
                    </li>
                    <li className="mb-8   font-medium hover:text-cyan-300 tracking-tighter">
                      <a href="#">About us</a>
                    </li>
                    <li className="mb-8   font-medium hover:text-cyan-300 tracking-tighter">
                      <a href="#">Wallet</a>
                    </li>
                    <li className="  font-medium hover:text-cyan-300 tracking-tighter">
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <a
                    className="inline-block px-8 py-4 text-center   hover:text-black tracking-tighter  border-2 border-white focus:border-org focus:border-opacity-40 hover:border-cyan-300 focus:ring-4 focus:ring-green-org focus:ring-opacity-40 rounded-full transition duration-300"
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
                    <h1 className="mb-8 text-7xl lg:text-8xl font-heading  tracking-tighter">
                      A Distilled Approach to Earnings Insights.
                    </h1>
                    <p className="mb-10 text-lg   md:max-w-xs">
                      Earnings reports can be dense, but your decisions
                      shouldn’t be. Get condensed insightful summaries of
                      earnings reports and more that strip away the noise.
                    </p>
                    <a
                      className="inline-block px-8 py-4 tracking-tighter hover:bg-org bg-cyan-300 text-black focus:ring-4 focus:ring-org focus:ring-opacity-40 rounded-full transition duration-300"
                      href="#"
                    >
                      Start now
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-5/12 p-8">
                  <div className="relative max-w-max mx-auto md:mr-0">
                    <img loading="lazy" src="/s1.png" alt="" />
                    <img
                      loading="lazy"
                      className="absolute -top-16 -left-16"
                      src="nightsable-assets/images/headers/star.svg"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      className="absolute top-56 -left-44"
                      src="nightsable-assets/images/headers/star2.svg"
                      alt=""
                    />
                    <div className="absolute bottom-10 -right-40">
                      <img
                        loading="lazy"
                        className="relative -bottom-4"
                        src="nightsable-assets/images/headers/star5.svg"
                        alt=""
                      />
                      <img
                        loading="lazy"
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
            loading="lazy"
            className="absolute  top-0 left-0"
            src="nightsable-assets/images/headers/layer-blur.svg"
            alt=""
          />
          <img
            loading="lazy"
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
                  <h2 className="mb-6 text-7xl font-heading   tracking-tighter-xl">
                    Sample Reports
                  </h2>
                  <p className="mb-10   text-opacity-60 md:max-w-xs">
                    Access our limited earnings reports of market leaders like
                    AAPL, AMZN, MSFT, and META.
                  </p>
                  <Link
                    className="inline-block px-8 py-4 tracking-tighter hover:bg-org bg-cyan-300 text-black focus:ring-4 focus:ring-org focus:ring-opacity-40 rounded-full transition duration-300"
                    href="/stats"
                  >
                    View Reports
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  loading="lazy"
                  className="md:mr-0 rounded-4xl"
                  src="ms2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="nightsable-assets/images/features/bg-blur.png"
            alt=""
          />
        </section>
        <section className="py-24 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="py-14 bg-gradient-radial-dark rounded-6xl">
              <div className="md:max-w-2xl mx-auto text-center px-4">
                <h2 className="mb-6 text-5xl font-heading  tracking-5xl">
                  Join the Wait List
                </h2>
                <p className="mb-12 text-gray-300 max-w-lg mx-auto">
                  Be among the first to gain access when we launch. Uncover
                  vital data, spot trends, and make informed decisions faster.
                </p>
                <a
                  className="inline-block px-14 py-4 font-medium tracking-2xl   hover:bg-org bg-cyan-300 text-black focus:ring-4 focus:ring-org focus:ring-opacity-40 rounded-full transition duration-300"
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
                <img
                  loading="lazy"
                  className="max-h-16 max-w-16"
                  src="LOGO.png"
                  alt=""
                />
              </div>
              <div className="w-auto p-8">
                <ul className="flex flex-wrap -m-5">
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Careers
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Privacy
                    </a>
                  </li>
                  <li className="p-5">
                    <a
                      className="inline-block text-lg font-medium text-gray-300 hover:text-cyan-300  transition duration-300"
                      href="#"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-auto p-8">
                <div className="relative border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
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
        </section>
      </>
    </>
  );
};
export default HeroSection;
