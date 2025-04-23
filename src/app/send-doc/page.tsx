// app/admin/send-doc/page.tsx
'use client'

import DocuSignUploader from '@/components/admin/DocuSignUploader'

export default function SendDocPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">📄 Enviar Documento para Assinatura</h1>
      <DocuSignUploader />
    </main>
  )
}
