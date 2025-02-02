// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import InstaFeed from "../../components/InstaFeed";

export const MemesView: FC = ({ }) => {

 
  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
	        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mb-4">
	          $RUdown News Channel
	        </h1>
        </div>

        <InstaFeed />
        
      </div>
    </div>
  );
};




