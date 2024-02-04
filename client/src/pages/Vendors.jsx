import VendorCards from './VendorCards';
import beigeImage from '../assets/home/beige.jpg'; 

function Vendors() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url('/beige.jpg')`, // Replace with the path or URL of beige.jpg
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // backgroundImage: `url(${process.env.VITE_PUBLIC_URL}/vendorsHero.jpg)`,
      }}
    >
      <VendorCards />
    </div>
  );
}

export default Vendors;