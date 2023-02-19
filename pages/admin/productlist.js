import React from "react";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const Productlist = () => {
  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://zidbhuiyan.github.io/productdatajson/data.json")
      .then((res) => {
        setProductdata(res.data);
      });
  });
  return (
    <>
      <section className="text-gray-600 body-font mt-2">
        <div className="container h-screen px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              Product List
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto h-5/6 bg-gray-50 overflow-auto">
            <table className="table-auto w-full text-center whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
                    ID
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">
                    Title
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                    Price
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">
                    Details
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {productdata.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td className="px-4 bg-gray-100 py-3">{data.id}</td>
                      <td className="px-4 py-3">{data.title}</td>
                      <td className="px-4 py-3">{data.price}</td>
                      <td className="px-4 py-3">
                        <Link
                          className="text-blue-600"
                          href={"/admin_product/" + data.id}
                        >
                          View more...
                        </Link>
                      </td>
                      <td className="w-10 text-center"></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center p-5">
            <Link
              href={"/admin/addproduct"}
              className=" p-4 text-xl bg-[#274374] text-center object-cover object-center rounded-xl text-white hover:bg-blue-600"
            >
              Add new product
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productlist;
