import chrisImage from '../assets/home/chris.jpg';
import harinImage from '../assets/home/harin.jpg';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center h-screen">
      <div className="text-center" style={{ margin: '0 auto' }}>
        <h1 className="text-4xl text-center font-bold mb-8">Meet the Developers</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div style={{ transform: 'rotate(2deg)', width: '75%' }}>
              <img src={chrisImage} alt="Chris" className="w-full rounded border-8 border-black shadow-lg" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold ml-[-4rem]" style={{ color: '#0070F3' }}>Chris</p>
            </div>
          </div>
          <div className="text-center">
            <div style={{ transform: 'rotate(-1deg)', width: '80%' }}>
              <img src={harinImage} alt="Harin" className="w-full rounded border-8 border-black shadow-lg" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold ml-[-3rem]" style={{ color: '#0070F3' }}>Harin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;