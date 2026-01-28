/**
 * Menu page – ab thoda advanced:
 * - categories (rice, bbq, drinks)
 * - price badge
 * - "Order" button (sirf login ke baad kaam karega, logic App.jsx me hai)
 */
const menuItems = [
  {
    id: 1,
    name: 'Biryani',
    price: 250,
    desc: 'Chawal aur gosht ka masala',
    category: 'Rice',
    spice: '🌶️🌶️',
  },
  {
    id: 2,
    name: 'Chicken Karahi',
    price: 380,
    desc: 'Laal masalay wali handi style karahi',
    category: 'Curry',
    spice: '🌶️🌶️🌶️',
  },
  {
    id: 3,
    name: 'Daal Chawal',
    price: 140,
    desc: 'Tarka daal, chawal, salad & achaar',
    category: 'Rice',
    spice: '🌶️',
  },
  {
    id: 4,
    name: 'Chicken Burger',
    price: 220,
    desc: 'Crispy fillet, cheese & sauces',
    category: 'Fast Food',
    spice: '🌶️',
  },
  {
    id: 5,
    name: 'Zinger Roll',
    price: 180,
    desc: 'Spicy mayo, fries & chicken',
    category: 'Fast Food',
    spice: '🌶️🌶️',
  },
  {
    id: 6,
    name: 'Sweet Lassi',
    price: 90,
    desc: 'Thandi, meethi lassi',
    category: 'Drinks',
    spice: '❄️',
  },
  {
    id: 7,
    name: 'Salted Lassi',
    price: 90,
    desc: 'Namkeen lassi, doodh & dahi',
    category: 'Drinks',
    spice: '❄️',
  },
]

const categories = ['All', 'Rice', 'Curry', 'Fast Food', 'Drinks']

const Menu = ({ isLoggedIn, onOrder }) => {
  const [activeCategory, setActiveCategory] = React.useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="space-y-6">
      {/* header + filter tabs */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-emerald-300">📋 Menu</h1>
          <p className="text-emerald-200/80 text-sm">
            Apni pasand ki dish chuny, order ke liye button use karein.
          </p>
          {!isLoggedIn && (
            <p className="mt-1 text-xs text-amber-300">
              * Order sirf login ke baad hoga – pehle account se login karein.
            </p>
          )}
        </div>

        {/* category filter chips */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
                activeCategory === cat
                  ? 'bg-emerald-400 text-slate-950 border-emerald-300'
                  : 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* dishes grid – har dish ek card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="relative bg-linear-to-br from-slate-900 via-slate-900/95 to-slate-900/80 rounded-2xl border border-slate-700/70 shadow-lg shadow-emerald-500/5 p-4 flex flex-col gap-3 hover:border-emerald-400/70 hover:shadow-emerald-500/20 transition-all"
          >
            {/* category + price badge row */}
            <div className="flex items-start justify-between gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-200 text-[11px] font-medium border border-emerald-500/40">
                {item.category}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-950/70 text-emerald-300 text-xs font-semibold border border-slate-700">
                Rs. {item.price}
              </span>
            </div>

            {/* naam + spice level */}
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-emerald-100 text-lg truncate">
                {item.name}
              </h3>
              <span className="text-sm" title="Spice level">
                {item.spice}
              </span>
            </div>

            {/* description */}
            <p className="text-sm text-slate-300 leading-snug line-clamp-3">
              {item.desc}
            </p>

            {/* order button */}
            <div className="mt-1 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onOrder(item)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-400 text-slate-950 font-semibold text-sm py-2 hover:bg-emerald-300 active:bg-emerald-500 transition-colors"
              >
                🛒 Order
              </button>
              <p className="text-[11px] text-slate-400 text-right max-w-[120px]">
                {isLoggedIn ? 'Instant add in cart.' : 'Login pehle, phir order add hoga.'}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Menu
