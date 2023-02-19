import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Home = () => {
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://zidbhuiyan.github.io/productdatajson/data.json")
      .then((res) => {
        for (var i = 0; i < 3; i++) {
          setProductdata(res.data);
        }
      });
  });
  return (
    <>
      <section className="text-gray-600 mt-10 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Find your product here
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {productdata.slice(0, 3).map((data) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={data.id}>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={data.image}
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {data.title}
                  </h2>
                  <p className="text-base truncate hover:text-clip leading-relaxed mt-2">
                    {data.description}
                  </p>
                  <Link
                    className="text-indigo-500 inline-flex items-center mt-3"
                    href={"/product/" + data.id}
                  >
                    View more
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
