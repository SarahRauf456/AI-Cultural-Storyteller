import React, { useState } from 'react'

export default function CreatorDashboard() {
  const [title, setTitle] = useState('')
  const [prompt, setPrompt] = useState('')
  const [items, setItems] = useState(() => JSON.parse(localStorage.getItem('creations') || '[]'))

  function generateStory(e) {
    e.preventDefault()
    // STUB: Replace with server call to AI. For now, create a mock story.
    const story = {
      id: Date.now(),
      title: title || 'Untitled',
      content: `Generated story for prompt: ${prompt}. Once there was...`,
      createdAt: new Date().toISOString()
    }
    const next = [story, ...items]
    setItems(next)
    localStorage.setItem('creations', JSON.stringify(next))
    setTitle('')
    setPrompt('')
  }

  return (
    <div className="card p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Creator Dashboard</h2>

      <form onSubmit={generateStory} className="space-y-3">
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Story title" className="w-full p-2 rounded bg-transparent border border-slate-700" />
        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter creative prompt..." className="w-full p-2 rounded bg-transparent border border-slate-700" rows="4" />
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-500">Generate Story</button>
        </div>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Your Creations</h3>
        <div className="space-y-3">
          {items.length === 0 && <div className="text-slate-400">No creations yet.</div>}
          {items.map(it => (
            <div key={it.id} className="p-3 rounded bg-black/20 border border-slate-800">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{it.title}</div>
                  <div className="text-xs text-slate-400">{new Date(it.createdAt).toLocaleString()}</div>
                </div>
              </div>
              <p className="text-slate-300 mt-2">{it.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
