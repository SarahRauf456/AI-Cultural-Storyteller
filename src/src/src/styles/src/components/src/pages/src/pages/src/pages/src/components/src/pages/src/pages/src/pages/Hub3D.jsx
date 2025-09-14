import React from 'react'

export default function Hub3D() {
  return (
    <div className="mt-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Cultural Hub</h3>
          <p className="text-slate-400">Explore 3D scenes inspired by historical courts (Mughal, Vijayanagar) and timelines. This is a placeholder viewer — to plug into real 3D scenes, add three.js or @react-three/fiber and host large models in a CDN.</p>
          <ul className="text-slate-300 mt-3 space-y-2 text-sm">
            <li>• Mughal Court (timeline & 3D model)</li>
            <li>• Vijayanagar Empire (reconstructed scene)</li>
            <li>• Cultural timelines and artifacts</li>
          </ul>
        </div>

        <div className="md:col-span-2 card p-6 rounded-lg">
          <div className="h-[360px] rounded bg-black/30 border border-slate-700 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <div className="font-semibold mb-2">3D Viewer (placeholder)</div>
              <div className="text-sm">Add three.js and models. To enable browser 3D generation, connect a server that produces glTF or point-clouds and load via the viewer.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
