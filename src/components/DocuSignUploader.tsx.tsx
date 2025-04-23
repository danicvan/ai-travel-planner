'use client'

import { useState } from 'react'

export default function SendDocPage() {
  const [file, setFile] = useState<File | null>(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [envelopeId, setEnvelopeId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file || !email || !name) {
      setError('Preencha todos os campos e selecione um arquivo.')
      return
    }

    setLoading(true)
    setError('')

    const reader = new FileReader()
    reader.onload = async () => {
      const base64 = (reader.result as string).split(',')[1] // remove prefixo data:...

      const response = await fetch('/api/docusign/send-envelope', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          documentBase64: base64,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        setEnvelopeId(data.envelopeId)
      } else {
        setError(data.error || 'Erro ao enviar documento.')
      }

      setLoading(false)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Enviar Documento para Assinatura</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="file"
          accept="application/pdf"
          className="w-full"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Documento'}
        </button>
      </form>

      {envelopeId && (
        <p className="mt-4 text-green-600">
          Documento enviado com sucesso! Envelope ID: <strong>{envelopeId}</strong>
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium">{error}</p>
      )}
    </div>
  )
}
