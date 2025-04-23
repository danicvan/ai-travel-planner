export async function getDocuSignAccessToken() {
    const credentials = Buffer.from(`${process.env.DOCUSIGN_INTEGRATOR_KEY}:${process.env.DOCUSIGN_SECRET}`).toString('base64');
  
    const res = await fetch("https://account-d.docusign.com/oauth/token", {
      method: "POST",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials&scope=signature"
    });
  
    const data = await res.json();
    return data.access_token;
  }
  