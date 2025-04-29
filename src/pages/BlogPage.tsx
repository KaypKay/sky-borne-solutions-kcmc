
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Cloud Seeding: How It Works",
      excerpt:
        "Cloud seeding is a weather modification technique that aims to change the amount or type of precipitation by introducing substances into the air that serve as cloud condensation or ice nuclei.",
      category: "Atmospheric Science",
      date: "April 15, 2025",
      author: "Dr. Rajeev Kumar",
      authorRole: "Lead Atmospheric Scientist",
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Case Study: Karnataka's Monsoon Enhancement Project",
      excerpt:
        "An in-depth look at our successful cloud seeding operations during the 2019-2020 monsoon season in Karnataka, achieving a 30% increase in rainfall across target regions.",
      category: "Case Studies",
      date: "March 22, 2025",
      author: "Krishi P. Koliwad",
      authorRole: "Managing Director",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Air Ambulance Services: When Minutes Matter",
      excerpt:
        "Exploring how our air ambulance services provide critical care transportation in emergency situations, reducing transfer times and improving patient outcomes.",
      category: "Aviation Ops",
      date: "February 10, 2025",
      author: "Dr. Sunita Patel",
      authorRole: "Medical Director",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd06f9bd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Advanced Technologies in Weather Modification",
      excerpt:
        "A look at the cutting-edge technologies being employed in modern weather modification operations, including new seeding agents and distribution methods.",
      category: "Atmospheric Science",
      date: "January 28, 2025",
      author: "Dr. Rajeev Kumar",
      authorRole: "Lead Atmospheric Scientist",
      image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const categories = [
    "All",
    "Atmospheric Science",
    "Aviation Ops",
    "Case Studies",
    "Company News",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-4xl font-poppins font-bold">Blog & Insights</h1>
            
            <div className="mt-4 md:mt-0">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64"
                />
                <svg 
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? "bg-kcmc-sky text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-kcmc-sky">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold mt-1 mb-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-kcmc-sky transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-kcmc-sky/20 rounded-full flex items-center justify-center text-kcmc-sky font-medium">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-2">
                        <p className="text-xs font-medium">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-kcmc-sky text-sm font-medium hover:underline"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="bg-white border border-kcmc-sky text-kcmc-sky hover:bg-kcmc-sky/10 py-2 px-6 rounded transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
