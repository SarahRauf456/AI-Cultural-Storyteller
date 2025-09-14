import React from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">AI Cultural Storyteller</h1>
          <p className="text-slate-300 mb-6">Explore interactive stories, talk with AI avatars, generate cultural illustrations, and step into 3D historical hubs — kid-friendly and creator-friendly.</p>

          <div className="flex gap-3">
            <Link to="/kids" className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-500 text-white inline-flex items-center gap-2">
              <Play size={16} /> Start Story Mode
            </Link>
            <Link to="/image-gen" className="px-4 py-2 rounded border border-slate-700 text-slate-200">Image Lab</Link>
          </div>
        </div>

        <div className="card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Featured</h3>
          <ul className="space-y-3 text-slate-300">
            <li>• Interactive kid-friendly avatars (local preview included)</li>
            <li>• Creator tools for story & content generation (UI)</li>
            <li>• 3D cultural hubs & timelines (placeholders for Three.js)</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 rounded-lg">
          <h4 className="font-semibold">Safe for Kids</h4>
          <p className="text-slate-400 mt-2">Kid-friendly voice interactions and parental controls (UI stub).</p>
        </div>
        <div className="card p-6 rounded-lg">
          <h4 className="font-semibold">Creator Suite</h4>
          <p className="text-slate-400 mt-2">Generate stories, images, and bundle them into content packs for educators.</p>
        </div>
        <div className="card p-6 rounded-lg">
          <h4 className="font-semibold">Cultural Hub</h4>
          <p className="text-slate-400 mt-2">Explore immersive timelines and historically-inspired 3D scenes (placeholder).</p>
        </div>
      </div>
    </section>
  )
}
