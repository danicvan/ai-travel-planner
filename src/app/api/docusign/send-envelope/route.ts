import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, documentBase64 } = await req.json()

  try {
    const accessToken = await getDocuSignAccessToken()

    const envelopeDefinition = {
      emailSubject: "Assinatura de Documento",
      recipients: {
        signers: [{
          email,
          name,
          recipientId: "1",
          routingOrder: "1",
        }]
      },
      documents: [{
        documentBase64,
        name: "Contrato",
        fileExtension: "pdf",
        documentId: "1",
      }],
      status: "sent",
    }

    const res = await fetch(`https://demo.docusign.net/restapi/v2.1/accounts/${process.env.DOCUSIGN_ACCOUNT_ID}/envelopes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(envelopeDefinition)
    })

    const data = await res.json()
    return NextResponse.json({ envelopeId: data.envelopeId })

  } catch (err: any) {
    console.error(err)
    return NextResponse.json({ error: 'Erro ao enviar documento' }, { status: 500 })
  }
}

async function getDocuSignAccessToken() {
  const credentials = Buffer.from(`${process.env.DOCUSIGN_INTEGRATOR_KEY}:${process.env.DOCUSIGN_SECRET}`).toString('base64')

  const res = await fetch("https://account-d.docusign.com/oauth/token", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&scope=signature"
  });

  const data = await res.json()
  return data.access_token
}
