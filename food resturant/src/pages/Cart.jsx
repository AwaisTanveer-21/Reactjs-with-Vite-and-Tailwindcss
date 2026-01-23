import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa'

const Cart = () => {
  // Sample cart items - in a real app, this would come from context/state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs and lemon butter sauce",
      price: 24.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100"
    },
    {
      id: 2,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with parmesan, croutons, and Caesar dressing",
      price: 14.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100"
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, vanilla ice cream",
      price: 12.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=100"
    }
  ])

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08 // 8% tax
  const deliveryFee = subtotal > 30 ? 0 : 3.99 // Free delivery over $30
  const total = subtotal + tax + deliveryFee

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-md mx-auto">
          <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/menu"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <p className="text-orange-600 font-bold">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors duration-200"
                    >
                      <FaMinus className="text-sm" />
                    </button>

                    <span className="font-semibold text-lg w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-colors duration-200"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 mt-2 transition-colors duration-200"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                {deliveryFee === 0 && subtotal > 30 && (
                  <p className="text-green-600 text-sm">✓ Free delivery on orders over $30</p>
                )}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-bold text-lg transition-colors duration-200 mb-4">
                Proceed to Checkout
              </button>

              <Link
                to="/menu"
                className="block text-center text-orange-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Continue Shopping
              </Link>

              {/* Special Offers */}
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Special Offers</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 10% off orders over $50</li>
                  <li>• Free delivery on orders over $30</li>
                  <li>• Loyalty points on every purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Lobster Ravioli", price: 28.99, image: "https://images.unsplash.com/photo-1551892376-c73a3b8b6c7f?w=200" },
              { name: "Tiramisu", price: 10.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200" },
              { name: "Craft Beer", price: 7.99, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=200" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-orange-600 font-bold">${item.price}</p>
                  <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart