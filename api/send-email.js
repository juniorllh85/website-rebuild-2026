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
    // 1. Send notification to the foundation
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "The Golden Years Foundation", email: "thegoldenyearsfoundation@gmail.com" },
        to: [{ email: "thegoldenyearsfoundation@gmail.com" }],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    // 2. Send cordial auto-reply to the user (if email is provided)
    const userEmail = data.email || data.contact;
    const userName = data.fullName || data.name || 'Friend';

    if (userEmail && userEmail.includes('@')) {
      const autoReplyHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <div style="background: #059669; padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">¡Gracias por tu gran corazón! ❤️</h1>
          </div>
          <div style="padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; line-height: 1.6;">
            <p>Hola <strong>${userName}</strong>,</p>
            <p>Recibimos con mucha alegría tu mensaje e interés en apoyar nuestra labor en <strong>The Golden Years Foundation</strong>.</p>
            <p>Personas como tú son las que hacen posible que nuestros adultos mayores reciban el amor, la atención y la dignidad que tanto merecen. En este momento, nuestro equipo está revisando tu información y nos pondremos en contacto contigo muy pronto para dar el siguiente paso juntos.</p>
            <p>Mientras tanto, te invitamos a seguir acompañándonos en esta misión.</p>
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-style: italic;">
              "Dando vida y esperanza a quienes lo dieron todo."
            </p>
            <p style="margin-top: 20px;">
              Con gratitud,<br>
              <strong>El Equipo de The Golden Years Foundation</strong>
            </p>
          </div>
        </div>
      `;

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "The Golden Years Foundation", email: "thegoldenyearsfoundation@gmail.com" },
          to: [{ email: userEmail }],
          subject: "¡Gracias por contactar a The Golden Years Foundation!",
          htmlContent: autoReplyHtml,
        }),
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
