/**
 * Contact page – address, phone, email
 */
const Contact = () => {
  return (
    <div className="space-y-6">
      {/* page heading */}
      <div>
        <h1 className="text-2xl font-bold text-amber-800">📞 Contact</h1>
        <p className="text-amber-600 text-sm">Humse kaise connect karein</p>
      </div>

      {/* contact details wala card */}
      <div className="bg-white rounded-2xl shadow-md p-6 border border-amber-100 max-w-xl">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-amber-800 mb-1">📍 Address</h3>
            <p className="text-amber-700">Main Bazar , Havelian</p>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800 mb-1">📱 Phone</h3>
            <p className="text-amber-700">02321-1234567</p>
          </div>
          <div>
            <h3 className="font-semibold text-amber-800 mb-1">✉️ Email</h3>
            <p className="text-amber-700">info@ATestaurant.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
