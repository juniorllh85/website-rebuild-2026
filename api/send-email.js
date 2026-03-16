export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, data } = req.body;
  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  if (!BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not set');
    return res.status(500).json({ error: 'Mail server configuration missing' });
  }

  // Determine email subject and content based on type
  let subject = '';
  let htmlContent = '';

  const formatData = (obj) => {
    return Object.entries(obj)
      .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
      .join('');
  };

  switch (type) {
    case 'voluntariado':
      subject = 'New Volunteer Registration - TGYF';
      break;
    case 'donacion_especie':
      subject = 'New In-Kind Donation - TGYF';
      break;
    case 'alianza':
      subject = 'New Partnership Request - TGYF';
      break;
    case 'donacion_dinero':
      subject = 'New Monetary Donation Intent - TGYF';
      break;
    default:
      subject = 'New Website Notification - TGYF';
  }

  htmlContent = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
      <div style="background: #0f172a; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 20px;">The Golden Years Foundation</h1>
      </div>
      <div style="padding: 20px;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">${subject}</h2>
        <p>New information received from the website:</p>
        <ul style="list-style: none; padding: 0;">
          ${formatData(data)}
        </ul>
      </div>
      <div style="background: #f8fafc; color: #64748b; padding: 15px; text-align: center; font-size: 12px;">
        This email was sent from the website contact form.
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "TGYF Website", email: "thegoldenyearsfoundation@gmail.com" },
        to: [{ email: "thegoldenyearsfoundation@gmail.com" }],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return res.status(response.status).json({ error: 'Failed to send email' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
