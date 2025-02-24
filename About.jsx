import AboutImage from '../assets/image03.jpeg';

const About = () => {
  return (
    <div className='bg-slate-600 text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          {/* Image on the left with increased size */}
          <img
            src={AboutImage}
            alt="About Me"
            className='w-96 h-96 rounded object-cover mb-8 md:mb-0' // Increased size
          />
          <p className='text-lg'>
            I am a passionate full-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
          </p>
        </div>

        {/* Progress Bars */}
        <div className='mt-8'>
          <label htmlFor="htmlandcss" className="block text-lg font-medium mb-2">HTML & CSS</label>
          <div className='w-full bg-gray-800 rounded-full h-2.5'>
            <div
              className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105'
              style={{ width: '80%' }} // Adjust this percentage as needed
            ></div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor="javascript" className="block text-lg font-medium mb-2">JavaScript</label>
          <div className='w-full bg-gray-800 rounded-full h-2.5'>
            <div
              className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105'
              style={{ width: '70%' }} // Adjust this percentage as needed
            ></div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor="react" className="block text-lg font-medium mb-2">React.js</label>
          <div className='w-full bg-gray-800 rounded-full h-2.5'>
            <div
              className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105'
              style={{ width: '75%' }} // Adjust this percentage as needed
            ></div>
          </div>
        </div>
        <div className='mt-8'>
          <label htmlFor="nodejs" className="block text-lg font-medium mb-2">Node.js</label>
          <div className='w-full bg-gray-800 rounded-full h-2.5'>
            <div
              className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105'
              style={{ width: '85%' }} // Adjust this percentage as needed
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
