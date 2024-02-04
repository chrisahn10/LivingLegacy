
import chrisImage from '../assets/home/chris.jpg';
import harinImage from '../assets/home/harin.jpg';

const AboutUs = () => {
  const frameStyles = [
    { transform: 'rotate(2deg)', width: '75%' },
    { transform: 'rotate(-1deg)', width: '80%' },
  ];
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-center font-bold mb-8">Meet the Developers</h1>
      <div className="grid grid-cols-2 gap-4">
        {[chrisImage, harinImage].map((image, index) => (
          <div key={index} className="text-center p-2" style={frameStyles[index % frameStyles.length]}>
            <img src={image} alt={`Team member ${index + 1}`} className="w-full rounded border-8 border-black shadow-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
