
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "IITM CAIPEX 2019 Cloud Seeding Campaign",
      description:
        "A collaborative research project with the Indian Institute of Tropical Meteorology to study cloud physics and enhance rainfall through targeted seeding operations.",
      results: "Successful enhancement of rainfall in selected regions with comprehensive data collection for scientific analysis.",
      location: "Maharashtra, India",
      year: "2019",
      image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Karnataka Government 2019-2020 Monsoon Operations",
      description:
        "A large-scale cloud seeding operation commissioned by the Karnataka State Government to enhance rainfall during monsoon seasons across drought-prone regions.",
      results: "Approximately 30% increase in rainfall across targeted regions, significantly improving water resources for agriculture and drinking water supplies.",
      location: "Karnataka, India",
      year: "2019-2020",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Agricultural Water Resource Enhancement Project",
      description:
        "A targeted cloud seeding operation to enhance rainfall for agricultural purposes in drought-affected regions.",
      results: "Increased water availability for farming communities, with improved crop yields reported across the region.",
      location: "Tamil Nadu, India",
      year: "2021",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-8">Projects & Case Studies</h1>
          
          <div className="mb-12">
            <div className="bg-kcmc-sky/10 p-6 rounded-lg">
              <h2 className="text-2xl font-poppins font-semibold mb-4">Impact Overview</h2>
              <p className="mb-6">
                Our cloud seeding operations have consistently demonstrated significant positive impacts 
                across various regions in India. Through precise application of atmospheric science and 
                cutting-edge technology, we've helped communities address water scarcity challenges.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-3xl font-bold text-kcmc-sky">30%</p>
                  <p className="text-gray-600">Average rainfall increase</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-3xl font-bold text-kcmc-sky">500,000+</p>
                  <p className="text-gray-600">Hectares impacted</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <p className="text-3xl font-bold text-kcmc-sky">12+</p>
                  <p className="text-gray-600">Major operations completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-poppins font-semibold">{project.title}</h2>
                      <span className="bg-kcmc-sky/20 text-kcmc-sky text-sm font-medium px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-2">Results</h3>
                      <p>{project.results}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">Project Locations</h2>
            <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Interactive map visualization will be displayed here</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
