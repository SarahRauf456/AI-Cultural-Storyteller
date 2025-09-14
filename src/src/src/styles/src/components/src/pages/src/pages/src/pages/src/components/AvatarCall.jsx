import React, { useRef, useState } from 'react'

export default function AvatarCall() {
  const videoRef = useRef()
  const [streaming, setStreaming] = useState(false)

  async function startLocal() {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      videoRef.current.srcObject = s
      videoRef.current.muted = true
      await videoRef.current.play()
      setStreaming(true)
      // NOTE: This is a local preview only. To enable multi-user calls, add a signaling server (Agora/Daily/etc).
    } catch (e) {
      alert('Camera/mic access denied or not available.')
    }
  }

  function stopLocal() {
    const tracks = videoRef.current?.srcObject?.getTracks() || []
    tracks.forEach(t => t.stop())
    videoRef.current.srcObject = null
    setStreaming(false)
  }

  return (
    <div>
      <video ref={videoRef} className="w-full rounded bg-black" playsInline />
      <div className="mt-3 flex gap-2">
        {!streaming ? (
          <button onClick={startLocal} className="px-3 py-2 rounded bg-indigo-600">Start Preview</button>
        ) : (
          <button onClick={stopLocal} className="px-3 py-2 rounded bg-red-600">Stop</button>
        )}
        <button onClick={() => alert('Demo: connect to AI avatar (stub)')} className="px-3 py-2 rounded border">Talk to Avatar (stub)</button>
      </div>
    </div>
  )
}
