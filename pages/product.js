import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Product = () =>{

  const [productdata, setProductdata] = useState([])

   useEffect(()=>{
    axios.get("https://zidbhuiyan.github.io/productdatajson/data.json")
    .then(res=>{
      setProductdata(res.data)
    })
   })

  
    return(
      <>
      <section className="text-gray-600 body-font mt-10 bg-gray-50">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

      {
        productdata.map(data=>{
          return(
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={data.id}>
            <div className=' bg-gray-200'>

            <div className="block relative bg-gray-200 h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.image}/>
            </div>
            
            <div className="mt-4 ml-2">
              <h2 className="text-gray-900 title-font text-lg font-medium">{data.title}</h2>
              <p className="mt-1">{data.price} BDT</p>
              <div className='mt-1 pb-2'>
              <a className='text-blue-600' href='#'> View details</a>
              </div>
              
            </div>

            </div>
          </div>
          )
        })
      }
     
      
      
    </div>
  </div>
</section>
      
      </>
    )
  }
  
  export default Product