import React from 'react';
import bookImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
      <div className='bg-base-200'>

<div className="hero  min-h-[70vh] rounded-2xl  container mx-auto px-10">
  <div class="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={bookImg}
      class="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
    
      <button class="btn btn-success mt-8">
       View the List
      </button>
    </div>
  </div>
</div>
      </div>

        
     
    );
};

export default Banner;