import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import crowdImage from '../assets/home/crowd.jpeg'; 

export default function Home() {
  const [Image1, setImage1] = useState(null);
  const [Image2, setImage2] = useState(null);

  useEffect(() => {
    import('../assets/home/people.jpeg').then((imageModule) => {
      setImage1(imageModule.default);
    });

    import('../assets/home/Living-Legacy.jpeg').then((imageModule) => {
      setImage2(imageModule.default);
    });
  }, []);


  return (
    <div>
      {/* Hero Section with Container */}
      <div className="relative bg-cover bg-center" 
          style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${Image1})`,  }}>
        {/* ... Hero Content ... */}

        {/* Color Blocks at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          {/* Connections Box */}
          <Link to="/Events" className="w-1/3 h-24 flex justify-center items-center bg-[#EC3717] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">Connections</p>
          </Link>
          
          {/* Chat Bot */}
          <Link to="/Legacies" className="w-1/3 h-24 flex justify-center items-center bg-[#FE891B] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">Chat Bot</p>
          </Link>
          
          {/* Sign Up Box */}
          <Link to="/Signup" className="w-1/3 h-24 flex justify-center items-center bg-[#54BD13] hover:opacity-75">
    <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">SIGN UP NOW</p>
</Link>
        </div>
      </div>

      {/* Crowd Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${crowdImage})`}}>
        {/* ... Craftsmen Content ... */}

        {/* Color Block at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          <Link to="/Events" className="w-full h-24 flex justify-center items-center bg-[#7B583D] hover:opacity-75">
            <p className="text-white text-xl font-bold">CONNECT</p>
          </Link>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${Image2})`, backgroundSize: '70%' }}>
        {/* ... Tour Content ... */}

        {/* Color Block at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          <Link to="/Feed" className="w-full h-24 flex justify-center items-center bg-[#7B583D] hover:opacity-75">
            <p className="text-white text-xl font-bold">Check our your feed!</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full h-12 flex justify-center items-center bg-[#B59F84]">
      <p className="text-white text-xl font-bold text-center">Contact us by clicking our names at the!</p>
      </div>
    </div>
  );
}
