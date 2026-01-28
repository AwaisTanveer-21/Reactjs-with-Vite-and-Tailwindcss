import { useState } from 'react'

/**
 * Login page – yahan user email/password daal ke andar aata hai
 * Colors aur design ko dark + emerald theme mein kiya gaya
 */
const Login = ({ onLogin, alreadyInAppLayout }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // abhi sirf check karte hain kuch bhi likha ho, baad mein backend laga lena
    if (email.trim() && password.trim()) {
      onLogin()
    }
  }

  const wrapperClass = alreadyInAppLayout
    ? 'flex items-center justify-center p-4'
    : 'min-h-screen bg-slate-950 flex items-center justify-center p-4'

  return (
    <div className={wrapperClass}>
      {/* poora screen pe center wala hissa – login form ke liye */}
      {/* card jaisa box jisme form hai */}
      <div className="w-full max-w-md bg-slate-950/80 backdrop-blur-md rounded-2xl shadow-xl shadow-emerald-500/20 p-8 border border-emerald-500/40">
        {/* upar heading – restaurant ka naam */}
        <h1 className="text-2xl font-bold text-emerald-200 text-center mb-2">
          🍽️ AT Zaiqa Restaurant
        </h1>
        <p className="text-emerald-100/80 text-center text-sm mb-6">
          Pehle login karein, phir hi aap order place kar sakte hain.
        </p>

        {/* form – email, password inputs + submit button */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* email input wala div */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-emerald-100 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-950/70 text-slate-50 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none text-sm"
              required
            />
          </div>

          {/* password input wala div */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-emerald-100 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-slate-700 bg-slate-950/70 text-slate-50 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none text-sm"
              required
            />
          </div>

          {/* submit button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold rounded-lg transition-colors text-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
