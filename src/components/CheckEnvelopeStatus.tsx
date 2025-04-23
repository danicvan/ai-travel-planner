export async function checkDocuSignStatus(envelopeId: string) {
    const accessToken = await getDocuSignAccessToken();
    const res = await fetch(`https://demo.docusign.net/restapi/v2.1/accounts/YOUR_ACCOUNT_ID/envelopes/${envelopeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  
    return await res.json();
  }
  