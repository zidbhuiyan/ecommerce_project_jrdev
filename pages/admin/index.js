import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiProfit } from "react-icons/gi";

const Dashboard = () => {
  return (
    <>
      <section className="text-gray-600 mt-20 bg-gray-50 h-screen body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Welcome<span className=" text-blue-500"> Admin </span>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className=" inline-block">
                  <AiOutlineShoppingCart size={40} />
                </div>

                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Orders</p>
                <Link className="text-blue-600 py-1" href={"/admin/orderlist"}>
                  View all
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className=" inline-block">
                  <AiOutlineUser size={40} />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">Users</p>
                <Link className="text-blue-600 py-1" href={"/admin"}>
                  View all
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className=" inline-block">
                  <MdProductionQuantityLimits size={40} />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.2K
                </h2>
                <p className="leading-relaxed">Products</p>
                <Link className="text-blue-600 py-1" href="/admin/productlist">
                  View all
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <div className=" inline-block">
                  <GiProfit size={40} />
                </div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.2K BDT
                </h2>
                <p className="leading-relaxed">Profit</p>
                <Link className="text-blue-600 py-1" href={"/admin"}>
                  View all
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
