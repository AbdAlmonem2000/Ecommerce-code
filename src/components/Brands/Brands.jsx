import React, { useEffect, useState } from 'react';
import Style from './Brands.module.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';




export default function Brands() {



  
  function recentBrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  let { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ['recentbrand'],
    queryFn: recentBrands,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    select: (data) => data?.data?.data,
    staleTime: 3000,
  });

  if (isLoading) {
    return <div className='flex justify-center items-center mt-64 my-32'><span className="loader "></span></div>
  }


  if (isError) {
    return <div className='flex justify-center items-center'><h1 className='text-3xl font-bold'>{error.message}</h1></div>
  }

  return <>

    <div className='my-16 row'>
      {data.map((prand) => (
        <div className='md:w-1/3 xl:w-1/5 lg:w-1/4 p-3 hover:scale-105 transition-all hover:bg-gray-100 rounded-md' key={prand._id}>
          <Link to={`/branddatals/${prand._id}`}>
            <div >
              <img className='w-full rounded-none ' src={prand.image} alt={prand.name} />
            </div>
          </Link>
        </div>

      ))}
    </div>
  </>;
}
