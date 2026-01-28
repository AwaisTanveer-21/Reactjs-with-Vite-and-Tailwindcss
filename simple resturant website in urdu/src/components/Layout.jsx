/**
 * Layout – upar navbar, neeche jo bhi page active hai woh dikhta hai
 * logout bhi yahan se ho sakta hai
 * Ab navbar me cart count + thoda modern gradient colors add kiye
 */
const Layout = ({ children, activePage, setActivePage, onLogout, isLoggedIn, cartCount }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'menu', label: 'Menu', icon: '📋' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      {/* poora app ka wrapper – flex column taake navbar upar, content neeche */}
      <header className="sticky top-0 z-10 overflow-hidden shadow-lg shadow-emerald-500/20">
        {/* gradient navbar background */}
        <div className="bg-linear-to-r from-slate-950 via-emerald-700 to-emerald-400">
          {/* top navbar – logo, tabs, cart, logout */}
          <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex flex-wrap items-center justify-between gap-3">
            {/* left side – restaurant naam */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-950/50 border border-emerald-300/60 text-lg">
                🍽️
              </span>
              <div className="leading-tight">
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-emerald-50">
                  AT Zaiqa
                </h2>
                <p className="text-[11px] uppercase tracking-[0.15em] text-emerald-200/80">
                  Authentic Desi Flavours
                </p>
              </div>
            </div>

            {/* beech wala hissa – navigation tabs; chhote screen pe wrap ho sakte hain */}
            <nav className="flex flex-wrap gap-1 justify-center sm:justify-end min-w-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors text-sm sm:text-base shrink-0 border ${
                    activePage === item.id
                      ? 'bg-slate-950/90 text-emerald-300 border-emerald-300'
                      : 'bg-slate-900/40 text-emerald-50/90 border-transparent hover:bg-slate-900/70 hover:border-emerald-200/50'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>

            {/* right side – cart + logout/login */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* cart status */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/40 px-2.5 py-1 border border-emerald-300/40">
                <span className="text-sm">🛒</span>
                <span className="text-xs text-emerald-100 font-medium">
                  Cart:{' '}
                  <span className="font-semibold text-emerald-300">
                    {cartCount ?? 0}
                  </span>
                </span>
              </div>

              {/* auth button */}
              {isLoggedIn ? (
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-950/90 hover:bg-slate-900 text-emerald-100 font-semibold text-sm sm:text-base border border-emerald-200/60 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setActivePage('login')}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-emerald-300 hover:bg-emerald-200 text-slate-950 font-semibold text-sm sm:text-base border border-emerald-100 transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* neeche jo page hai usko yahan render karte hain */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 min-w-0 overflow-x-hidden">
        {children}
      </main>
    </div>
  )
}

export default Layout
