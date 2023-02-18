import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Details = () => {
  const router = useRouter();
  const id = router.query.id;

  const [productdata, setProductdata] = useState([]);
  const [orderdata, setOrderdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://zidbhuiyan.github.io/productdatajson/data.json")
      .then((res) => {
        setProductdata(res.data);
      });

    axios
      .get("https://zidbhuiyan.github.io/productdatajson/oderlistdata.json")
      .then((res) => {
        setOrderdata(res.data);
      });
  });
  return (
    <>
      {orderdata.map((data) => {
        if (data.id == id) {
          return (
            <section class="text-gray-600 mt-4 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    {data.name}
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Total Item: {data.item}
                  </p>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Total Cost: {data.price}
                  </p>
                </div>
                {productdata.map((info) => {
                  for (var i = 0; i < 10; i++) {
                    if (info.id == data.order[i]) {
                      return (
                        <div class="flex flex-wrap -m-2">
                          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                              <img
                                alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="https://dummyimage.com/80x80"
                              />
                              <div class="flex-grow">
                                <h2 class="text-gray-900 title-font font-medium">
                                  {info.title}
                                </h2>
                                <p class="text-gray-500">UI Designer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default Details;
