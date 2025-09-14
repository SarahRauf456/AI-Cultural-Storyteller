import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CreatorDashboard from './pages/CreatorDashboard'
import KidsRoom from './pages/KidsRoom'
import ImageGen from './pages/ImageGen'
import Hub3D from './pages/Hub3D'
import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/bg-noise.png')] bg-cover">
      <div className="bg-dark-grad min-h-screen text-slate-100">
        <Nav />
        <main className="max-w-6xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/creator" element={<CreatorDashboard />} />
            <Route path="/kids" element={<KidsRoom />} />
            <Route path="/image-gen" element={<ImageGen />} />
            <Route path="/hub-3d" element={<Hub3D />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
