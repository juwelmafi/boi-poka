import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-8">
      <div className="hero bg-base-200 min-h-[80vh] rounded-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="pngwing 1.png"
            className="md:w-[25%] rounded-lg"
          />
          <div className="md:w-[55%] space-y-10">
            <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
            <button className="btn bg-green-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;