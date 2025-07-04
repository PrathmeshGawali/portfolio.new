import React from 'react';
import { FaServer, FaFileAlt, FaCalendarAlt, FaChalkboardTeacher, FaUsers, FaMedal } from 'react-icons/fa';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Hosted a private server",
      icon: <FaServer className="text-blue-500" />,
      date: "July 2025",
      description: "Hosted and managed a personal cloud-based service under Tensorbuilds, connecting 3-4 servers to provide scalable hosting for client applications.",
      color: "bg-blue-100 border-blue-500"
    },
    {
      id: 2,
      title: "Research Paper",
      icon: <FaFileAlt className="text-green-500" />,
      date: "March 2025",
      description: "Wrote a research paper titled 'From Neurons to Networks: The Impact of Neuromorphic Computing on BCI Development'. Preprint available on OSF.",
      link: "https://osf.io/2sy6m_v1",
      color: "bg-green-100 border-green-500"
    },
    {
      id: 3,
      title: "Event Head",
      icon: <FaUsers className="text-purple-500" />,
      date: "July 2023 - March 2024",
      organization: "Association of Computer Engineering Students (ACES PVG COET), Pune",
      description: "Acquired the position of Event Head at ACES (a non profit organization) where we conducted various technical and non-technical events throughout the year with a vision to improve the technical knowledge of our students.",
      color: "bg-purple-100 border-purple-500"
    },
    {
      id: 4,
      title: "Speaker",
      icon: <FaChalkboardTeacher className="text-orange-500" />,
      date: "16th April 2024",
      organization: "Computer Engineering Department, PVG COET, Pune",
      description: "Conducted a Hands-On on Basics of React framework for associated junior batch.",
      color: "bg-orange-100 border-orange-500"
    },
    {
      id: 5,
      title: "Event Organizer",
      icon: <FaCalendarAlt className="text-red-500" />,
      date: "July 2023 - March 2024",
      organization: "Google Developers Student Club (GDSC), PVG COET, Pune",
      description: "A club dedicated towards improving technical knowledge of our students by conducting various technical events throughout the year like expert sessions, webinars, hands on sessions and a Hackathon.",
      color: "bg-red-100 border-red-500"
    },
    {
      id: 6,
      title: "Event Team Member",
      icon: <FaMedal className="text-teal-500" />,
      date: "July 2022 - March 2023",
      organization: "Association of Computer Engineering Students (ACES), PVG COET, Pune",
      description: "Acquired the position of Event Head at ACES (a non profit organization) where we conducted various technical and non-technical events throughout the year with a vision to improve the technical knowledge of our students.",
      color: "bg-teal-100 border-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Activities & Experiences</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A timeline of my professional activities, leadership roles, and contributions to academic and technical communities.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-700 md:left-1/2 md:-ml-0.5"></div>
          
          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div 
                key={activity.id} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-white border-4 border-blue-500 z-10 md:left-1/2 md:-ml-2"></div>
                
                {/* Date */}
                <div className={`flex items-center justify-center w-20 h-20 rounded-full ${activity.color} border-2 mb-4 md:mb-0 md:w-32 md:h-32`}>
                  <div className="text-center">
                    <div className="text-2xl mb-1 flex justify-center">{activity.icon}</div>
                    <p className="text-sm md:text-base font-medium text-gray-800">{activity.date}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 md:px-8 py-2">
                  <div className="bg-gray-900 rounded-xl shadow-lg p-6 relative border-l-4 border-blue-500">
                    <div className="absolute -left-1.5 top-6 w-3 h-3 rotate-45 bg-blue-500"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                    
                    {activity.organization && (
                      <p className="text-gray-300 font-medium mb-3">{activity.organization}</p>
                    )}
                    
                    <p className="text-gray-400 mb-4">{activity.description}</p>
                    
                    {activity.link && (
                      <a 
                        href={activity.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                      >
                        View Preprint
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
