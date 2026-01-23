import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaStar, FaFilter } from 'react-icons/fa'

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'main-courses', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'specials', name: 'Chef\'s Specials' }
  ]

  const menuItems = [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Crispy risotto balls filled with truffle and parmesan, served with marinara sauce",
      price: 16.99,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400",
      rating: 4.8,
      isPopular: true,
      dietary: ["vegetarian"]
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs, lemon butter sauce, and seasonal vegetables",
      price: 24.99,
      category: "main-courses",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
      rating: 4.9,
      isPopular: true,
      dietary: ["gluten-free"]
    },
    {
      id: 3,
      name: "Wagyu Beef Burger",
      description: "Premium wagyu beef patty with caramelized onions, aged cheddar, and special sauce",
      price: 22.99,
      category: "main-courses",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
      rating: 4.7,
      isPopular: false,
      dietary: []
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, vanilla ice cream, and raspberry coulis",
      price: 12.99,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400",
      rating: 4.9,
      isPopular: true,
      dietary: ["vegetarian"]
    },
    {
      id: 5,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan, croutons, and classic Caesar dressing",
      price: 14.99,
      category: "appetizers",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
      rating: 4.6,
      isPopular: false,
      dietary: ["vegetarian", "gluten-free"]
    },
    {
      id: 6,
      name: "Lobster Ravioli",
      description: "Homemade pasta filled with lobster, served in a light cream sauce",
      price: 28.99,
      category: "main-courses",
      image: "https://images.unsplash.com/photo-1551892376-c73a3b8b6c7f?w=400",
      rating: 4.8,
      isPopular: true,
      dietary: []
    },
    {
      id: 7,
      name: "Craft Beer Selection",
      description: "Rotating selection of local and imported craft beers",
      price: 7.99,
      category: "beverages",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400",
      rating: 4.5,
      isPopular: false,
      dietary: ["vegan", "gluten-free"]
    },
    {
      id: 8,
      name: "Chef's Tasting Menu",
      description: "7-course tasting menu featuring seasonal ingredients and innovative techniques",
      price: 85.99,
      category: "specials",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      rating: 5.0,
      isPopular: true,
      dietary: []
    },
    {
      id: 9,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
      price: 10.99,
      category: "desserts",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400",
      rating: 4.7,
      isPopular: false,
      dietary: ["vegetarian"]
    }
  ]

  const filteredItems = menuItems
    .filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const addToCart = (item) => {
    // This would typically update a cart context/state
    alert(`${item.name} added to cart!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients and culinary expertise
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Category Filter */}
              <div className="relative">
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.isPopular && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                  {item.dietary.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.dietary.map((diet, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium capitalize"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No dishes found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Menu Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Menu Categories</h2>
            <p className="text-xl text-gray-600">Explore our diverse range of culinary offerings</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.slice(1).map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 hover:border-orange-300 hover:bg-gray-50'
                }`}
              >
                <h3 className="font-semibold text-center">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu