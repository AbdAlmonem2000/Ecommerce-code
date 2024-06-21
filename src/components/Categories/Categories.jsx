import React from 'react';
import Style from './Categories.module.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function Categories() {

  function recentcategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  let { data, error, isError, isLoading, isFetched } = useQuery({
    queryKey: ['recentProducts'],
    queryFn: recentcategories,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    select: (data) => data?.data?.data,
    staleTime: 3000,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    
    <div className='my-16 row'>
      {data && data.map((cate) => (
        <div className='w-1/4' key={cate._id}>
          <img className='w-full rounded-none h-[300px]' src={cate.image} alt={cate.name} />
        </div>
      ))}
    </div>
  );
}
