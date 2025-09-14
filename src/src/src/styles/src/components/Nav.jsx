import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Coffee, Globe, User, Video, Camera } from 'lucide-react'

export default function Nav() {
  const navigate = useNavigate()
  const name = localStorage.getItem('ai_user') || null

  function logout() {
    localStorage.removeItem('ai_user')
    navigate('/')
  }

  return (
    <header className="py-4 shadow-sm border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center">
              <Globe className="text-white" size={20} />
            </div>
            <div>
              <div className="text-white font-bold">AI Cultural Storyteller</div>
              <div className="text-xs text-slate-400">Stories • Avatars • Heritage</div>
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Link to="/hub-3d" className="text-slate-300 hover:text-white">3D Hub</Link>
          <Link to="/image-gen" className="text-slate-300 hover:text-white">Image Lab</Link>
          <Link to="/kids" className="text-slate-300 hover:text-white">Kids Room</Link>
          <Link to="/creator" className="text-slate-300 hover:text-white">Creator</Link>

          {name ? (
            <div className="ml-3 flex items-center gap-2">
              <User className="text-slate-300" />
              <span className="text-slate-200 text-sm">{name}</span>
              <button onClick={logout} className="ml-2 px-2 py-1 text-sm rounded bg-slate-700 hover:bg-slate-600">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="px-3 py-1 rounded bg-gradient-to-r from-purple-600 to-indigo-500 text-white">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
