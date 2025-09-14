import React, { useState } from 'react'

export default function ImageGen() {
  const [prompt, setPrompt] = useState('')
  const [images, setImages] = useState([])

  async function generate(e) {
    e.preventDefault()
    // STUB: replace with API call to image generator (OpenAI/StableDiffusion)
    // Example: fetch to your backend that uses API_KEY (stored as a GitHub Secret)
    // For demo, create placeholder images using data URLs
    const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500'><rect width='100%' height='100%' fill='#0b1220'/><text x='50%' y='50%' fill='white' font-size='22' text-anchor='middle' dominant-baseline='middle'>Placeholder image for: ${prompt}</text></svg>`)}`

    setImages(prev => [placeholder, ...prev])
    setPrompt('')
  }

  return (
    <div className="card p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">AI Image Lab</h2>
      <form onSubmit={generate} className="flex gap-3">
        <input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Describe the cultural scene you want..." className="flex-1 p-2 rounded bg-transparent border border-slate-700" />
        <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-500">Generate</button>
      </form>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="rounded overflow-hidden border border-slate-800">
            <img src={src} alt="generated" />
          </div>
        ))}
        {images.length === 0 && <div className="text-slate-400">No images yet — try a prompt.</div>}
      </div>
    </div>
  )
}
