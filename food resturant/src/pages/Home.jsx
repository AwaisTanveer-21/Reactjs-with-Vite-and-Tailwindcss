import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Home = () => {
  const featuredDishes = [
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
      rating: 4.8
    },
    {
      id: 2,
      name: "Beef Steak",
      description: "Prime ribeye steak cooked to perfection",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
      rating: 4.9
    },
    {
      id: 3,
      name: "Pasta Carbonara",
      description: "Traditional Italian pasta with pancetta and eggs",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1551892376-c73a3b8b6c7f?w=400",
      rating: 4.7
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Critic",
      comment: "Absolutely amazing dining experience. The flavors were incredible and the service was top-notch!",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      comment: "Best restaurant in town! The quality and taste of every dish exceeds expectations.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Food Blogger",
      comment: "Delicious Bites never disappoints. Their attention to detail and fresh ingredients shine through.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-300">Delicious Bites</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.
              Your satisfaction is our passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                View Our Menu
              </Link>
              <Link
                to="/about"
                className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaClock className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Hot and fresh meals delivered to your doorstep in under 30 minutes</p>
            </div>
            <div className="text-center p-6">
              <FaStar className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Only the finest ingredients and expert chefs create our exceptional dishes</p>
            </div>
            <div className="text-center p-6">
              <FaMapMarkerAlt className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Convenient Location</h3>
              <p className="text-gray-600">Easy to find with ample parking and accessible for everyone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our chef's special creations that have delighted our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">{dish.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">${dish.price}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience Delicious Bites?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers and discover why we're the best choice for your dining needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-colors duration-200"
            >
              Order Now
            </Link>
            <div className="flex items-center justify-center space-x-4 text-white">
              <FaPhone className="text-2xl" />
              <span className="text-lg font-semibold">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home