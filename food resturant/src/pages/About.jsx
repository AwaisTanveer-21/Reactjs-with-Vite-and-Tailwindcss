import React from 'react'
import { FaAward, FaUsers, FaHeart, FaStar } from 'react-icons/fa'

const About = () => {
  const chefs = [
    {
      name: "Chef Maria Rodriguez",
      role: "Executive Chef",
      experience: "15+ years",
      specialty: "Mediterranean Cuisine",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300",
      bio: "With over 15 years of experience in fine dining, Chef Maria brings authentic Mediterranean flavors to every dish."
    },
    {
      name: "Chef James Chen",
      role: "Sous Chef",
      experience: "10+ years",
      specialty: "Asian Fusion",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300",
      bio: "James specializes in innovative Asian fusion techniques, blending traditional flavors with modern presentation."
    },
    {
      name: "Chef Isabella Moreno",
      role: "Pastry Chef",
      experience: "8+ years",
      specialty: "Desserts & Pastries",
      image: "assets/istockphoto-2213039176-612x612.webp",
      bio: "Isabella's passion for desserts creates unforgettable sweet endings to every meal."
    }
  ]

  const stats = [
    { icon: FaUsers, value: "50,000+", label: "Happy Customers" },
    { icon: FaAward, value: "25+", label: "Awards Won" },
    { icon: FaHeart, value: "98%", label: "Customer Satisfaction" },
    { icon: FaStar, value: "4.9/5", label: "Average Rating" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Delicious Bites</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            A culinary journey that began with a passion for exceptional food and unwavering commitment to quality.
            Every dish tells a story of tradition, innovation, and love for great cuisine.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, Delicious Bites began as a small family-owned restaurant with a big dream.
                  What started as a passion project has grown into one of the city's most beloved dining destinations.
                </p>
                <p>
                  Our founder, recognizing the need for authentic, high-quality cuisine that doesn't compromise on taste
                  or health, set out to create a restaurant that serves food as it should be - fresh, flavorful, and made with love.
                </p>
                <p>
                  Today, we continue that tradition, sourcing the finest ingredients from local farmers and trusted suppliers,
                  while maintaining the personal touch that makes every meal special.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="text-4xl text-orange-400 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from selecting ingredients to serving our guests
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaAward className="text-3xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every ingredient is carefully selected and every dish is prepared
                with the utmost attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Made with Love</h3>
              <p className="text-gray-600">
                Food is more than sustenance - it's an expression of care. We put our heart into every meal we prepare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-3xl text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Focused</h3>
              <p className="text-gray-600">
                We're proud to be part of this community and committed to supporting local farmers and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Chefs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Chefs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented culinary team brings years of experience and passion to create exceptional dining experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{chef.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{chef.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{chef.experience} • {chef.specialty}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-8">
            To create memorable dining experiences by combining exceptional cuisine, outstanding service,
            and a warm, welcoming atmosphere that makes every guest feel like family.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold mb-2">Exceptional Food</h3>
              <p className="text-orange-100">Every dish crafted with precision and passion</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Outstanding Service</h3>
              <p className="text-orange-100">Personalized attention to every guest</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Memorable Experiences</h3>
              <p className="text-orange-100">Creating moments that last a lifetime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About