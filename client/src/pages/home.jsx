import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../assets/home/contact.jpg'; 
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
          {/* Block 1 */}
          <Link to="/Events" className="w-1/3 h-24 flex justify-center items-center bg-[#EC3717] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">Connections</p>
          </Link>
          
          {/* Chat Bot */}
          <Link to="/Vendors" className="w-1/3 h-24 flex justify-center items-center bg-[#FE891B] hover:opacity-75">
            <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">Chat Bot</p>
          </Link>
          
          {/* Block 3 */}
          <Link to="/Signup" className="w-1/3 h-24 flex justify-center items-center bg-[#54BD13] hover:opacity-75">
    <p className="text-white text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold">SIGN UP NOW</p>
</Link>
        </div>
      </div>

      {/* Craftsmen Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${crowdImage})`}}>
        {/* ... Craftsmen Content ... */}

        {/* Color Block at the bottom with hover effect */}
        <div className="absolute bottom-0 w-full flex">
          <Link to="/Events" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
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
          <Link to="/FacilityTour" className="w-full h-24 flex justify-center items-center bg-[#0dafec] hover:opacity-75">
            <p className="text-white text-xl font-bold">CHAT WITH LEGACIES</p>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-cover bg-center" 
           style={{ height: 'calc(100vh - 100px)', backgroundImage: `url(${contactImage})` }}>
        <div className="absolute bottom-0 w-full flex">
          <div className="w-full h-24 flex justify-center items-center bg-[#0dafec]">
            <p className="text-white text-xl font-bold text-center">CONTACT US BY CLICKING OUR NAMES AT THE BOTTOM!</p>
          </div>
        </div>
      </div>
      </div>
  );
}
