// src/components/EmpowerSection.js
import React from 'react';
import certificateIcon from '../assets/logo/medal.svg'; // Ensure the path and file name are correct
import knowledgeIcon from '../assets/logo/thought.png'; // Ensure the path and file name are correct
import handsOnExperienceIcon from '../assets/logo/training.png'; // Fixed unterminated string literal
import rightSideImage from '../assets/img/AboutDashboard.png'; // Ensure the path and file name are correct
import backgroundImage from '../assets/img/BackgroundHero.svg'; // Ensure the path and file name are correct

const EmpowerSection = () => {
  return (
    <section
      className="bg-black py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Background image applied via inline style
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: 3 Cards */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-8">Empower Your Future with Cutting-Edge Skills</h2>

            {/* Certificate Distribution */}
            <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-md mb-6">
              <img src={certificateIcon} alt="Certificate Distribution Icon" className="w-12 h-12 mr-4" /> {/* Certification Icon */}
              <div>
                <h3 className="text-xl font-bold text-white">Certificate Distribution</h3>
                <p className="text-gray-300">We offer certificates to validate and recognize your achievement.</p>
              </div>
            </div>

            {/* Knowledge */}
            <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-md mb-6">
              <img src={knowledgeIcon} alt="Knowledge Icon" className="w-12 h-12 mr-4" /> {/* Knowledge Icon */}
              <div>
                <h3 className="text-xl font-bold text-white">Knowledge</h3>
                <p className="text-gray-300">We deliver transformative knowledge that empowers and inspires.</p>
              </div>
            </div>

            {/* Hands-on Experience */}
            <div className="flex items-center bg-gray-900 p-6 rounded-lg shadow-md">
              <img src={handsOnExperienceIcon} alt="Hands-on Experience Icon" className="w-12 h-12 mr-4" /> {/* Hands-on Experience Icon */}
              <div>
                <h3 className="text-xl font-bold text-white">Hands-on Experience</h3>
                <p className="text-gray-300">We provide hands-on experience for real-world learning. You learn best by doing.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <img
              src={rightSideImage} // Image for the right side
              alt="Visual representation of empowering skills"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">New, Embrace Innovation, Master Technology, & Shape the Digital World</h3>
          <p className="text-gray-300 mb-6">Your journey to success starts here.</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600">
            Join Our Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;
