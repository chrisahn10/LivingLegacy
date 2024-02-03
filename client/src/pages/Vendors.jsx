import VendorCards from './VendorCards';
import beigeImage from '../assets/home/beige.jpg'; 

function Vendors() {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${beigeImage})`, // Use the imported image from beigeImage
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