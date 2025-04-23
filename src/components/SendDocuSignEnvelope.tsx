export async function sendDocuSignEnvelope({ email, name, documentBase64 }: {
    email: string;
    name: string;
    documentBase64: string;
  }) {
    const accessToken = await getDocuSignAccessToken(); // função separada
    const envelopeDefinition = {
      emailSubject: "Assinatura de contrato",
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
  
    const response = await fetch("https://demo.docusign.net/restapi/v2.1/accounts/YOUR_ACCOUNT_ID/envelopes", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(envelopeDefinition)
    })
  
    return await response.json()
  }
  