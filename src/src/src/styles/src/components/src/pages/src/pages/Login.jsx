import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [role, setRole] = useState('child')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function submit(e) {
    e.preventDefault()
    // Mock auth: store user
    localStorage.setItem('ai_user', name || 'Guest')
    localStorage.setItem('ai_role', role)
    if (role === 'creator') navigate('/creator')
    else if (role === 'child') navigate('/kids')
    else navigate('/')
  }

  return (
    <div className="max-w-lg mx-auto mt-12 card p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sign in</h2>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-sm text-slate-300">Display name</label>
          <input required value={name} onChange={e => setName(e.target.value)} className="w-full mt-1 p-2 rounded bg-transparent border border-slate-700" placeholder="e.g. Aisha" />
        </div>

        <div>
          <label className="text-sm text-slate-300">Role</label>
          <select value={role} onChange={e => setRole(e.target.value)} className="w-full mt-1 p-2 rounded bg-transparent border border-slate-700">
            <option value="child">Child</option>
            <option value="creator">Content Creator</option>
            <option value="educator">Educator</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-500">Enter</button>
        </div>
      </form>
    </div>
  )
}
