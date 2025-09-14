import React, { useState, useRef } from 'react'
import AvatarCall from '../components/AvatarCall'

export default function KidsRoom() {
  const [story, setStory] = useState('Welcome! Choose a prompt to begin your story.')
  const [prompt, setPrompt] = useState('')
  const audioRef = useRef()

  function askAI(e) {
    e.preventDefault()
    // STUB: Replace with real AI call. For now, create playful response.
    const reply = `AI Avatar: Once upon a time in a colorful palace, there lived a curious child called ${prompt || 'friend'}...`
    setStory(reply)
    // Optionally, we could use Web Speech API to speak
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(reply)
      window.speechSynthesis.cancel()
      window.speechSynthesis.speak(u)
    }
  }

  return (
    <div className="mt-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Story Mode</h3>
          <div className="mb-4 p-4 rounded bg-black/30 border border-slate-700 min-h-[150px]">
            <p className="text-slate-200">{story}</p>
          </div>

          <form onSubmit={askAI} className="flex gap-3">
            <input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Type a character or place..." className="flex-1 p-2 rounded bg-transparent border border-slate-700" />
            <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-indigo-500">Tell story</button>
          </form>
        </div>

        <div className="card p-6 rounded-lg">
          <h4 className="font-semibold mb-3">Avatar Room</h4>
          <p className="text-slate-400 mb-3">Start a local audio/video preview. For real multi-user calls, connect a WebRTC signaling service (see README).</p>
          <AvatarCall />
        </div>
      </div>
    </div>
  )
}
