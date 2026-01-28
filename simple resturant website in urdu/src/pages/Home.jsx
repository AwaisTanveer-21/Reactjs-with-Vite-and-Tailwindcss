/**
 * Home page – welcome message aur chhota intro
 * Colors dark + emerald theme mein change kiye gaye
 */
const Home = () => {
  return (
    <div className="space-y-6">
      {/* hero section – welcome heading */}
      <section className="rounded-3xl border border-emerald-500/40 bg-linear-to-br from-slate-950 via-slate-900 to-slate-900/80 shadow-xl shadow-emerald-500/15 p-8 text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80 mb-3">
          Welcome to
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-200 mb-3 leading-tight">
          AT Zaiqa Restaurant mein khushamded 🍛
        </h1>
        <p className="text-sm sm:text-base text-slate-200 max-w-2xl">
          Yahan se aap menu dekhen, apni pasand ka khana chunein aur order de sakte hain.
          &nbsp;
          <span className="text-emerald-300 font-medium">
            Menu tab pe jaake dishes explore karein, aur login ke baad directly order place karein.
          </span>
        </p>
      </section>

      {/* chhota info box – quick tips */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
          <h3 className="font-semibold text-emerald-200 mb-1">📋 Menu</h3>
          <p className="text-sm text-slate-200">
            Sari dishes yahan list hoti hain – categories ke sath, taake aapko jaldi mil jaye.
          </p>
        </div>
        <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
          <h3 className="font-semibold text-emerald-200 mb-1">🛒 Order Flow</h3>
          <p className="text-sm text-slate-200">
            Pehle login karein, phir kisi bhi dish pe <span className="font-semibold">Order</span>{' '}
            dabayen – item cart mein chala jayega.
          </p>
        </div>
        <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/80">
          <h3 className="font-semibold text-emerald-200 mb-1">📞 Contact</h3>
          <p className="text-sm text-slate-200">
            Address, phone – koi bhi sawal ho ya booking karni ho toh Contact page use karein.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
