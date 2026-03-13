// src/lib/contactConfig.ts

export const CONTACT_CONFIG = {
  // ✅ Where website emails should arrive (Vercel + shared hosting fallback)
  TO_EMAIL: 'info@sanyagardens.co.ug, harrietyogasanya@gmail.com',

  // ✅ WhatsApp number (international format, no +)
  WHATSAPP_NUMBER: '256772884321',

  // ✅ Email subject prefix
  SUBJECT_PREFIX: 'Sanya Gardens Consultation Request',

  // ✅ Endpoints (Vercel first, then shared hosting PHP fallback)
  API_ENDPOINT_VERCEL: '/api/contact',
  API_ENDPOINT_SHARED: '/api/send-mail.php'
} as const;